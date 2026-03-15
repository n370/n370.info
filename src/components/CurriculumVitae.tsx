"use client";

import { useEffect, useState, useRef } from "react";
import { format, parse } from "date-fns";
import { FaSpinner } from "react-icons/fa";
import styles from "./CurriculumVitae.module.css";

const formatDate = (date: string) =>
  format(parse(date, "yyyy-MM-dd", new Date()), "MMM, yyyy");

export const CurriculumVitae = () => {
  const openerRef = useRef(null);

  const [cv, setCV] = useState<any>(null);

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
        },
      );
      const blob = await res.blob();
      (openerRef?.current as any).href = URL.createObjectURL(blob);
      (openerRef?.current as any).click();
      (openerRef?.current as any).href = "noop";
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
    cv && (
      <div className={styles.main}>
        <div style={{ textAlign: "right" }}>
          <button
            className={styles.download}
            type="button"
            disabled={isDownloading}
            onClick={download}
          >
            {"Download"}
            {isDownloading && <FaSpinner className={styles.spinner} />}
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
        <div className={styles.section}>
          <h4>Skills and Qualifications</h4>
          <ul>
            {cv.skillsAndQualifications.map((skill: any, i: number) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Spoken Languages</h4>
          <ul>
            {cv.spokenLanguages.map((language: any) => (
              <li key={language.name}>
                {`${language.name} (${language.level})`}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.section}>
          <h4>Employment History</h4>
          {cv.employmentHistory.map(
            (employer: any, index: number, input: any) => (
              <div
                key={index}
                style={{
                  marginTop: index === 0 ? "2em" : 0,
                  marginBottom: index !== input.length ? "3em" : 0,
                }}
              >
                <div className={styles.row}>
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
                  {employer.description.map((paragraph: any, index: number) => (
                    <span key={index} className={styles.paragraph}>
                      {paragraph}
                    </span>
                  ))}
                </div>
                <div>
                  <span className={styles.paragraph}>
                    {employer.tools.reduce(
                      (text: any, tool: any, index: number, input: any) => {
                        text += tool;
                        if (index !== input.length - 1) {
                          text += ", ";
                        } else {
                          text += ".";
                        }
                        return text;
                      },
                      "Technologies used: ",
                    )}
                  </span>
                </div>
              </div>
            ),
          )}
        </div>
        <div className={styles.section}>
          <h4>Skills</h4>
          <span className={styles.paragraph}>
            {" "}
            {cv.skills.reduce(
              (text: any, skill: any, index: number, input: any) => {
                text += skill;
                if (index !== input.length - 1) {
                  text += ", ";
                } else {
                  text += ".";
                }
                return text;
              },
              "",
            )}
          </span>
        </div>
        <div className={styles.section}>
          <h4>Education</h4>
          {cv.education.map((site: any, index: number, input: any) => (
            <div
              key={index}
              className={styles.row}
              style={{ marginBottom: index !== input.length ? "0.25rem" : 0 }}
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
    )
  );
};
