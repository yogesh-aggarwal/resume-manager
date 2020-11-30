import React from "react";
import { currentResume, resumes } from "../../state/global";

const primary = "#1c76b3";
const tools = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
const styles = {
  preview: {
    ...tools.center,
    maxHeight: "calc(100vh - 4rem)",
  },
  wrapper: {
    transform: "scale(.8)",
  },
  resume: {
    margin: 0,
    padding: 0,
    background: "#fff",
    color: "#071a52",
    fontFamily: "Poppins",
    width: "39.7rem",
    height: "56rem",
    padding: "0 1.5rem",
  },
  typography: {
    heading: {
      fontWeight: "700",
      color: primary,
      borderBottom: `1px solid ${primary}`,
      borderRight: `5px solid ${primary}`,
      fontSize: "0.9rem",
      marginBottom: "0.7rem",
    },
    sHeading: {
      fontWeight: "600",
      fontSize: "0.7rem",
      marginTop: "0.7rem",
      marginBottom: "0.1rem",
    },
    xs: {
      fontSize: "0.7rem",
      lineHeight: "0.9rem",
    },
    s: {
      fontSize: "0.8rem",
      lineHeight: "0.9rem",
    },
    l: {
      fontSize: "0.9rem",
      lineHeight: "0.9rem",
    },
  },
  spacing: {
    m1: {
      marginTop: "0.1rem",
      marginBottom: "0.1rem",
    },
    m2: {
      marginTop: "0.2rem",
      marginBottom: "0.2rem",
    },
    m3: {
      marginTop: "0.3rem",
      marginBottom: "0.3rem",
    },
    m4: {
      marginTop: "0.4rem",
      marginBottom: "0.4rem",
    },
  },
  top: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "5rem",
    alignItems: "center",
    padding: "1.5rem 0",
  },
  bottom: {
    display: "grid",
    gridTemplateColumns: "28% auto",
  },
  name: {
    fontSize: "1.7rem",
    fontWeight: "600",
    color: primary,
  },
  role: {
    marginTop: "0.2rem",
    fontSize: "0.95rem",
    fontFamily: "Roboto Slab",
    fontWeight: "600",
    color: "#666666",
  },
  description: {
    ...tools.center,
    justifyContent: "flex-end",
    fontSize: "0.6rem",
    fontStyle: "italic",
    lineHeight: "0.8rem",
  },
  right: {
    paddingLeft: "1.5rem",
  },
  section: {
    marginBottom: "1rem",
  },
  sectionDated: {
    display: "grid",
    gridTemplateColumns: "25% auto",
    gridGap: "0.7rem",
    marginTop: "0.4rem",
    marginBottom: "0",
  },
  sectionHeading: {
    marginBottom: "0.7rem",
  },
  sectionSHeading: {
    fontSize: "0.8rem",
    marginTop: "0",
  },
  date: {
    fontWeight: "700",
    lineHeight: "1.1rem",
    fontSize: "0.7rem",
  },
  shortDesc: {
    marginBottom: "0.1rem",
  },
  ul: {
    margin: "0",
    padding: "0",
    paddingLeft: "1rem",
  },
  li: {
    margin: 0,
    lineHeight: "1rem",
    fontSize: "0.7rem",
    marginBottom: "0.1rem",
  },
};

export class PreviewComponent extends React.Component {
  state = {
    currentResume: null,
  };

  componentDidMount() {
    currentResume.subscribe((currentResume) => {
      this.setState({ currentResume: resumes.value[currentResume] });
    });
  }

  render() {
    const resume = this.state.currentResume;
    if (!resume) return <div>Resume not Found!</div>;

    return (
      <div style={styles.preview}>
        <div style={styles.wrapper}>
          <div style={styles.resume}>
            <div style={styles.top}>
              <div>
                <div style={styles.name}>{resume.name}</div>
                <div style={styles.role}>{resume.role}</div>
              </div>
              <div style={styles.description}>{resume.roleDesc}</div>
            </div>
            <div style={styles.bottom}>
              <div>
                <section style={styles.section}>
                  <div style={styles.typography.heading}>
                    Personal Information
                  </div>
                  <div style={styles.typography.sHeading}>Address</div>
                  <div style={styles.typography.xs}>{resume.address}</div>
                  <div style={styles.typography.sHeading}>Email Address</div>
                  <div style={styles.typography.xs}>{resume.email}</div>
                  <div style={styles.typography.sHeading}>Phone Number</div>
                  <div style={styles.typography.xs}>{resume.phoneNumber}</div>
                </section>
                <section style={styles.section}>
                  <div style={styles.typography.heading}>Skils</div>
                  {resume.skills.map((skill) => {
                    return (
                      <div
                        style={{
                          ...styles.typography.xs,
                          ...styles.spacing.m2,
                        }}
                      >
                        {skill}
                      </div>
                    );
                  })}
                </section>
                <section style={styles.section}>
                  <div style={styles.typography.heading}>Software</div>
                  {resume.softwares.map((software) => {
                    return (
                      <div
                        style={{
                          ...styles.typography.xs,
                          ...styles.spacing.m2,
                        }}
                      >
                        {software}
                      </div>
                    );
                  })}
                </section>
                <section style={styles.section}>
                  <div style={styles.typography.heading}>Languages</div>
                  {resume.languages.map((language) => {
                    return (
                      <div
                        style={{
                          ...styles.typography.xs,
                          ...styles.spacing.m2,
                        }}
                      >
                        {language}
                      </div>
                    );
                  })}
                </section>
              </div>
              <div style={styles.right}>
                <section style={styles.section}>
                  <div style={styles.typography.heading}>Projects</div>
                  {resume.projects.map((project) => {
                    return (
                      <section style={styles.sectionDated}>
                        <div style={styles.date}>{project.name}</div>
                        <div>
                          <ul style={styles.ul}>
                            {project.bullets.map((bullet) => {
                              return <li style={styles.li}>{bullet}</li>;
                            })}
                          </ul>
                        </div>
                      </section>
                    );
                  })}
                </section>

                <section style={styles.section}>
                  <div style={styles.typography.heading}>Education</div>
                  {resume.education.map((education) => {
                    return (
                      <section style={styles.sectionDated}>
                        <div style={styles.date}>{education.date}</div>
                        {education.sections.map((section) => {
                          return (
                            <div>
                              <div
                                style={{
                                  ...styles.typography.sHeading,
                                  ...styles.sectionSHeading,
                                }}
                              >
                                {section.name}
                              </div>
                              {section.name && (
                                <div
                                  style={{
                                    ...styles.typography.xs,
                                    ...styles.shortDesc,
                                  }}
                                >
                                  {section.shortDesc}
                                </div>
                              )}
                              <ul style={styles.ul}>
                                {section.bullets.map((bullet) => {
                                  return <li style={styles.li}>{bullet}</li>;
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </section>
                    );
                  })}
                </section>

                <section style={styles.section}>
                  <div style={styles.typography.heading}>Certifications</div>
                  <ul style={styles.ul}>
                    {resume.certifications.map((certification) => {
                      return <li style={styles.li}>{certification}</li>;
                    })}
                  </ul>
                </section>

                <section style={styles.section}>
                  <div style={styles.typography.heading}>Interests</div>
                  <ul style={styles.ul}>
                    {resume.interests.map((interest) => {
                      return <li style={styles.li}>{interest}</li>;
                    })}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
