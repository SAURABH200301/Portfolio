import belzabarLogo from "../image/belzabarLogo.png";
import readyCodeLogo from "../image/readyCoderLogo.png";

export const ExperienceType = {
  INTERN: "Trainee",
  FULL_TIME: "Full Time",
};

export const WorkExperiences = [
  {
    organizationName: "Belzabar Software Design India Private Limited",
    organizationLogo: belzabarLogo,
    startDate: "Jul 2024",
    currentlyWorking: false,
    endDate: "Jul 2025",
    durationMonths: 13,
    typeOfExperience: ExperienceType.FULL_TIME,
    designation: "Computer Scientist",
    description: [
      "Integrated OAuth2 with third-party authorization, collaborating with the back-end team to document the process, and designed a secure UI that reduced exposure risk of sensitive data (client ID and secret) by 100%. ",
      "Split a 4000-line service file into modular sub-services with a central index to improve structure, maintainability, and avoid circular dependencies.",
      "Mentored junior team members, fostering collaboration and knowledge sharing.",
      "Delivered multiple high-quality projects on time, enhancing user experience with intuitive and user-friendly interfaces.",
      "Built a backend-driven organization settings module with an accordion-based nested structure that achieved 100% efficiency in updates and deletions.",
      "Tech Used: AngularTS, RxJS, Lodash, Dragula, SCSS, angular UI, NodeJS,material UI",
    ],
  },
  {
    organizationName: "Belzabar Software Design India Private Limited",
    organizationLogo: belzabarLogo,
    startDate: "Aug 2023",
    endDate: "Jun 2024",
    currentlyWorking: false,
    durationMonths: 10,
    typeOfExperience: ExperienceType.INTERN,
    designation: "Front-End developer Intern",
    description: [
      "During this period, I enhanced my skills in Angular TypeScript, LodashJS, and Linux for front-end development.",
      "I learned effective team collaboration and gained insight into the product creation process, from development to client delivery.",
    ],
  },
  {
    organizationName: "Ready Coder Private Limited",
    organizationLogo: readyCodeLogo,
    startDate: "Jan 2022",
    endDate: "Feb 2022",
    currentlyWorking: false,
    durationMonths: 2,
    typeOfExperience: ExperienceType.INTERN,
    designation: "Front-End developer Intern",
    description: [
      "I worked as front end developer intern and learned react framework, created few pages and learned about the components and other react concepts.",
    ],
  },
];
