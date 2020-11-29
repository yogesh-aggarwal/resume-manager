import { BehaviorSubject } from "rxjs";

export const resumes = new BehaviorSubject([
  "Mobile Developer",
  "Frontend Developer",
  "Backend Developer",
  "Python Developer",
]);
export const currentResume = new BehaviorSubject(resumes.value[0]);

resumes.subscribe((resumes) => {
  console.log(resumes);
});
currentResume.subscribe((currentResume) => {
  console.log(currentResume);
});
