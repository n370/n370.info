import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const UnstyledCVPage = ({ className }) => {
  const [cv, setCV] = useState(null);

  const download = async () => {
    alert('Download!')
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
          <div>
            <span>{cv.header.fullName}</span>
            <span>{cv.header.phoneNumber}</span>
            <span>{cv.header.emailAddress}</span>
            <span>{cv.header.fiscalAddress}</span>
            <span>{cv.header.webpageUrl}</span>
            <div>
              {cv.header.socialNetworkProfiles.map((social, i) => (
                <a key={i} href={social.url}>{social.name}</a>
              ))}
            </div>
            <div>
              <button type="button" onClick={download}>Download PDF</button>
            </div>
          </div>
          <div>
            <h1>Skills and Qualifications</h1>
            {cv.skillsAndQualifications.map((skill, i) => (
              <>
                <span key={i}>{skill}</span>
                {", "}
              </>
            ))}
          </div>
          <div>
            <h1>Spoken Languages</h1>
            {cv.spokenLanguages.map((language) => (
              <div key={language.name}>
                <span>{language.name}</span>
                <span>{language.level}</span>
              </div>
            ))}
          </div>
          <div>
            <h1>Employment History</h1>
            {cv.employmentHistory.map((employer, i) => (
              <div key={i}>
                <span>{employer.companyName}</span>
                <span>{employer.role}</span>
                <span>{employer.location}</span>
                <span>{employer.start}</span>
                <span>{employer.end || "Present"}</span>
                <div>
                  {employer.description.map((paragraph, i) => (
                    <span key={i}>{paragraph}</span>
                  ))}
                </div>
                <div>
                  {employer.tools.map((tool, i) => (
                    <span key={i}>{tool}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h1>Skills</h1>
            {cv.skills.map((skill, i) => (
              <>
                <span key={i}>{skill}</span>
                {", "}
              </>
            ))}
          </div>
          <div>
            <h1>Education</h1>
            {cv.education.map((site) => (
              <div key={site.title}>
                <span>{site.title}</span>
                <span>{site.grade}</span>
                <span>{site.institution}</span>
                <span>{site.location}</span>
                <span>{site.start}</span>
                <span>{site.end || "Present"}</span>
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

  > div {
    margin: 1em 0;
  }
`;
