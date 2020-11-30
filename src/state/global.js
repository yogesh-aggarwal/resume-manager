import { BehaviorSubject } from "rxjs";

// Stores all the information about the resumes
export const resumes = new BehaviorSubject({
  1606735098652: {
    id: 1606735098652,
    role: "Mobile Developer",
    name: "Yogesh Aggarwal",
    roleDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ligula condimentum, congue erat at, sollicitudin tortor. Duis dui arcu, volutpat vitae ornare ac, facilisis non libero. In at bibendum lectus. Nulla sit amet congue justo",
    address: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    email: "example@example.com",
    phoneNumber: 1234567895,
    skills: ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur"],
    softwares: ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur"],
    languages: ["lorem", "ipsum"],
    projects: [
      {
        name: "Folder Prettifier",
        bullets: [
          "Developed Using WinForms C#.",
          "Scheduling was the toughest part.",
        ],
      },
    ],
    education: [
      {
        date: "2012-2020 (Present)",
        sections: [
          {
            name: "Masters of Computers, Stanford University",
            shortDesc: "",
            bullets: [
              "Member of Student Association of Computer Science & Development.",
              "Two",
              "Three",
            ],
          },
        ],
      },
    ],
    certifications: [
      "ReactJS Bootcamp",
      "Google Summer of Code",
      "Google Kickstart",
    ],
    interests: ["UI/UX Designing", "Competitive Programming"],
  },
});
// Stores the name of currentResume
export const currentResumeId = new BehaviorSubject(Object.keys(resumes.value)[0]);

resumes.subscribe((resumes) => {
  console.log(resumes);
});
currentResumeId.subscribe((currentResume) => {
  console.log(currentResume);
});
