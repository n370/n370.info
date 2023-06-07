import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Layout from "../components/Layout";
import { format, parse } from "date-fns";
import { FaSpinner } from "react-icons/fa";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const formatDate = (date) =>
  format(parse(date, "yyyy-MM-dd", new Date()), "MMM, yyyy");

const UnstyledCVPage = ({ className }) => {
  const openerRef = useRef();

  const [cv, setCV] = useState(null);

  const [isDownloading, setIsDownloading] = useState(false);

  const download = async () => {
    setIsDownloading(true);
    try {
      const res = await fetch(
        "https://us-central1-n370-166800.cloudfunctions.net/getCV",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: cv }),
        }
      );
      const blob = await res.blob();
      openerRef.current.href = URL.createObjectURL(blob);
      openerRef.current.click();
      openerRef.current.href = "noop";
    } catch (e) {
      console.error(e);
    }
    setIsDownloading(false);
  };

  useEffect(() => {
    run();

    async function run() {
      const res = await fetch("/data/cv.json");
      const body = await res.json();
      setCV(body.data);
    }
  }, []);

  return (
    <Layout>
      {cv && (
        <div className={className}>
          <div style={{ textAlign: "right" }}>
            <button
              className="download"
              type="button"
              disabled={isDownloading}
              onClick={download}
            >
              {"Download"}
              {isDownloading && <FaSpinner className="spinner" />}
            </button>
            <a
              aria-hidden
              style={{ visibility: "hidden" }}
              download="dylson-valente-neto.pdf"
              target="_blank"
              rel="noopener"
              ref={openerRef}
              href="noop"
            >
              noop
            </a>
          </div>
          <div className="section">
            <h4>Skills and Qualifications</h4>
            <ul>
              {cv.skillsAndQualifications.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="section">
            <h4>Spoken Languages</h4>
            <ul>
              {cv.spokenLanguages.map((language) => (
                <li key={language.name}>
                  {`${language.name} (${language.level})`}
                </li>
              ))}
            </ul>
          </div>
          <div className="section">
            <h4>Employment History</h4>
            {cv.employmentHistory.map((employer, index, input) => (
              <div
                key={index}
                style={{
                  marginTop: index === 0 ? "2em" : 0,
                  marginBottom: index !== input.length ? "3em" : 0,
                }}
              >
                <div className="row">
                  <div>
                    <span>
                      <strong>{employer.role}</strong>
                      {`, ${employer.companyName}, ${employer.location}`}
                    </span>
                  </div>
                  <div>
                    <span>{`${formatDate(employer.start)} — ${
                      employer.end ? formatDate(employer.end) : "Present"
                    }`}</span>
                  </div>
                </div>
                <div>
                  {employer.description.map((paragraph, index) => (
                    <span key={index} className="paragraph">
                      {paragraph}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="paragraph">
                    {employer.tools.reduce((text, tool, index, input) => {
                      text += tool;
                      if (index !== input.length - 1) {
                        text += ", ";
                      } else {
                        text += ".";
                      }
                      return text;
                    }, "Technologies used: ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="section">
            <h4>Skills</h4>
            <span className="paragraph">
              {" "}
              {cv.skills.reduce((text, skill, index, input) => {
                text += skill;
                if (index !== input.length - 1) {
                  text += ", ";
                } else {
                  text += ".";
                }
                return text;
              }, "")}
            </span>
          </div>
          <div className="section">
            <h4>Education</h4>
            {cv.education.map((site, index, input) => (
              <div
                key={index}
                className="row"
                style={{ marginBottom: index !== input.length ? "0.25em" : 0 }}
              >
                <div>
                  <span>
                    {[
                      site.title,
                      site.grade,
                      site.institution,
                      site.location,
                    ].reduce((text, datum, index, input) => {
                      text += datum;
                      if (index !== input.length - 1) {
                        text += ", ";
                      }
                      return text;
                    }, "")}
                  </span>
                </div>
                <div>
                  <span style={{ display: "inline-block", textAlign: "right" }}>
                    {formatDate(site.start)}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      textAlign: "center",
                      width: "25px",
                    }}
                  >
                    —
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      width: "80px",
                      textAlign: "left",
                    }}
                  >
                    {site.end ? formatDate(site.end) : "Present"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default styled(UnstyledCVPage)`
  width: 50%;

  .download {
    cursor: pointer;
  }

  .spinner {
    animation: 1s ${rotate} linear infinite;
    margin-left: 1em;
  }

  .paragraph {
    display: inline-block;
    font-family: "PT Serif", serif;
    font-size: 1em;
    line-height: 1.35;
    margin: 0.75em 0;
  }

  .section {
    margin: 3em 0;
  }

  .pipe {
    margin: 0 0.5em;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  > div {
    margin: 1em 0;
  }
`;
