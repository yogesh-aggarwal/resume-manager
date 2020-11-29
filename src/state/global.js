import { BehaviorSubject } from "rxjs";

// Stores all the information about the resumes
export const resumes = new BehaviorSubject({
  "Mobile Developer": {
    name: "Mobile Developer",
  },
});
// Stores the name of currentResume
export const currentResume = new BehaviorSubject(Object.keys(resumes.value)[0]);

resumes.subscribe((resumes) => {
  console.log(resumes);
});
currentResume.subscribe((currentResume) => {
  console.log(currentResume);
});
