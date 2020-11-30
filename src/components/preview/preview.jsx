import React from "react";
// import "./preview.module.scss";
// import { template } from "./template";

const primary = "#1c76b3";
const tools = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
const styles = {
  body: {
    margin: 0,
    padding: 0,
    background: "#fff",
    color: "#071a52",
    fontFamily: "Poppins",
    width: "71vh",
    height: "100vh",
    padding: "0 1.5rem",
  },
  typography: {
    heading: {
      fontWeight: "700",
      color: primary,
      borderBottom: `1px solid ${primary}`,
      borderRight: `5px solid ${primary}`,
      fontSize: "0.9rem",
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
    gridTemplateColumns: "35% auto",
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
    fontSize: "0.9rem",
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
  render() {
    return (
      <div style={styles.body}>
        <div style={styles.top}>
          <div>
            <div style={styles.name}>$00</div>
            <div style={styles.role}>$01</div>
          </div>
          <div style={styles.description}>$02</div>
        </div>
        <div style={styles.bottom}>
          <div>
            <section style={styles.section}>
              <div style={styles.typography.heading}>Personal Information</div>
              <div style={styles.typography.sHeading}>Address</div>
              <div style={styles.typography.xs}>$03</div>
              <div style={styles.typography.sHeading}>Email Address</div>
              <div style={styles.typography.xs}>$04</div>
              <div style={styles.typography.sHeading}>Phone Number</div>
              <div style={styles.typography.xs}>$05</div>
            </section>
            <section style={styles.section}>
              <div style={styles.typography.heading}>Skils</div>
              <div style={{ ...styles.typography.xs, ...styles.spacing.m4 }}>
                $06
              </div>
            </section>
            <section style={styles.section}>
              <div style={styles.typography.heading}>Software</div>
              <div style={{ ...styles.typography.xs, ...styles.spacing.m4 }}>
                $07
              </div>
            </section>
            <section style={styles.section}>
              <div style={styles.typography.heading}>Languages</div>
              <div style={{ ...styles.typography.xs, ...styles.spacing.m4 }}>
                $08
              </div>
            </section>
          </div>
          <div style={styles.right}>
            <section style={styles.section}>
              <div style={styles.typography.heading}>Projects</div>
              $09
              <section style={styles.sectionDated}>
                <div style={styles.date}>Folder Prettifier</div>
                <div>
                  <ul style={styles.ul}>
                    <li style={styles.li}>Developed Using WinForms C#.</li>
                    <li style={styles.li}>Scheduling was the toughest part.</li>
                  </ul>
                </div>
              </section>
            </section>

            <section style={styles.section}>
              <div style={styles.typography.heading}>Education</div>
              $10
              <section style={styles.sectionDated}>
                <div style={styles.date}>2012-2020 (Present)</div>
                <div>
                  <div style={styles.sectionSHeading}>
                    Masters of Computers, Stanford University
                  </div>
                  <div
                    style={{
                      ...styles.typography.xs,
                      ...styles.shortDesc,
                    }}
                  >
                    Although
                  </div>
                  <ul style={styles.ul}>
                    <li style={styles.li}>
                      Member of Student Association of Computer Science &
                      Development.
                    </li>
                    <li style={styles.li}>Two</li>
                    <li style={styles.li}>Three</li>
                    <li style={styles.li}>Four</li>
                  </ul>
                </div>
              </section>
            </section>

            <section style={styles.section}>
              <div style={styles.typography.heading}>Certifications</div>
              $11
              <ul style={styles.ul}>
                <li style={styles.li}>ReactJS Bootcamp</li>
                <li style={styles.li}>Google Summer of Code</li>
                <li style={styles.li}>Google Kickstart</li>
              </ul>
            </section>

            <section style={styles.section}>
              <div style={styles.typography.heading}>Interests</div>
              $12
              <ul style={styles.ul}>
                <li style={styles.li}>UI/UX Designing</li>
                <li style={styles.li}>Competitive Programming</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
