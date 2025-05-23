import belzabarLogo from '../image/belzabarLogo.png'
import readyCodeLogo from  '../image/readyCoderLogo.png'


export const ExperienceType={
    INTERN:'Intern',
    FULL_TIME:'Full Time'
}

export const WorkExperiences=[
    {
        organizationName:'Belzabar Software Design India Private Limited',
        organizationLogo: belzabarLogo,
        startDate:'Jul 2024',
        currentlyWorking: true,
        endDate:'',
        durationMonths:0,
        typeOfExperience: ExperienceType.FULL_TIME,
        designation:'Computer Scientist',
        description: [
            "Developed strategic project plans and authored technical documentation to improve team understanding and productivity.",
            "Mentored junior team members, fostering collaboration and knowledge sharing.",
            "Delivered multiple high-quality projects on time, enhancing user experience with intuitive and user-friendly interfaces.",
            "Improved software efficiency through optimized algorithms and scalable solutions for long-term growth.",
            "Tech Used: AngularTS, RxJS, Lodash, Dragula, SCSS, angular UI, NodeJS,material UI",
          ]          
    },
    {
        organizationName:'Belzabar Software Design India Private Limited',
        organizationLogo: belzabarLogo,
        startDate:'Aug 2023',
        endDate:'Jun 2024',
        currentlyWorking:false,
        durationMonths:9,
        typeOfExperience: ExperienceType.INTERN,
        designation:'Front-End developer Intern',
        description:[
            'During this period, I enhanced my skills in Angular TypeScript, LodashJS, and Linux for front-end development.',
            'I learned effective team collaboration and gained insight into the product creation process, from development to client delivery.'
        ]
    },
    {
        organizationName:'Ready Coder Private Limited',
        organizationLogo : readyCodeLogo,
        startDate:'Jan 2022',
        endDate:'Feb 2022',
        currentlyWorking:false,
        durationMonths:2,
        typeOfExperience: ExperienceType.INTERN,
        designation:'Front-End developer Intern',
        description:[
            'I worked as front end developer intern and learned react framework, created few pages and learned about the components and other react concepts.'
        ]
    },
]
