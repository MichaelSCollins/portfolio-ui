
import Logo from '@company-logos/TheHomeDepot.png'
import AmazonLogo from '@company-logos/AmazonMusic.png'
import NavexLogo from '@company-logos/NavexGlobal.webp'
import PapaJohns from '@company-logos/p-johns.png'
import CapOne from '@company-logos/cap-1.png'
import MSGames from '@company-logos/Microsoft-Logo-White.webp'
import Clarity from "@company-logos/clarity.png"
import GDIT from "@company-logos/gdit.png"
import SCLogic from "@company-logos/sc logic.webp"
import RealityAI from '@company-logos/rai.png'
import DirectedElec from '@company-logos/Directed.gif'
import UrbanaRE from '@company-logos/urabana.png'
import Pype from '@company-logos/pype.webp'
import Inkd from '@company-logos/inkd.jpg'

const experienceData = [
    {
        title: 'Lead Engineer @ Inkd App',
        img: {
            src: Inkd.src
        },
        description: '',
        duration: 'Sept 2023 - May 2024',
        skills: ['React', 'Chat GPT', 'Cursor', 'Figma AI'],
        skillBreakdown: [20, 10, 20, 10, 20, 0, 20],
        achievements: [
            'Created a prototype application to be shown to investors and associates.',
            'Used LLMs with design and development skills to create a beautiful app that functioned amazingly. This allowed us to get multiple features out the door faster.',
            'Used Next.JS and server side rendering to build fast and smooth components and pages for the application',
            'Created an advanced scheduling form stepper.',
            'Used Kotlin Spring Boot to build out backend features and API as well as Authorization',
            'All features were samarias@askconsulting.com in scalable microservices and a User Interface was created to allow developers to choose which environment to load each microservice from.']
    },
    {
        title: 'Lead Engineer @ The Home Depot',
        img: {
            src: Logo.src
        },
        description: '',
        duration: 'Sept 2023 - May 2024',
        skills: ['Kotlin', 'Springboot', 'React', 'Stencil'],
        skillBreakdown: [20, 30, 0, 20, 10, 10, 10],
        achievements: [
            'Optimized API performance, significantly reducing Delivery Tracker time complexity by 33%.',
            'Taught clean coding practices through code reviews and mentoring junior developers.',
            'Used data structures such as builder and job with hashmap to fix and optimize spaghetti code.',
            'Engineered new Stepper UI Control',
            'Used LLMs with design and development skills to create a beautiful app that functioned amazingly. This allowed us to get multiple features out the door faster.',
            'Improved and created automated tests'
        ]
    },
    {
        title: 'iOS Developer @ Amazon Music',
        img: {
            src: AmazonLogo.src
        },
        description: '',
        duration: 'Apr 2023 - Aug 2023',
        skills: [
            'React-Native', 'Swift', 'Objective C', 'AWS'
        ],
        skillBreakdown: [5, 20, 30, 20, 10, 5, 10],
        achievements: [
            'Rewrote category ui services to React-Native instead of Swift / Objective-C',
            'Fixed memory leaks that were plaguing the categories page.',
            'Created advanced GraphQL Queries to link multiple datasources.',
            'Simplified CLI authentication process turning a series of complicated commands into one.'
        ]
    },
    {
        title: 'AWS Engineer @ Navex Global',
        img: {
            src: NavexLogo.src
        },
        description: '',
        duration: 'Feb 2022 - Mar 2023',
        skills: ['AWS', 'React', 'Auth0', 'Node.js'],
        skillBreakdown: [10, 30, 0, 30, 10, 10, 10],
        achievements: [
            'Rewrote monolithic legacy ASP.Net services to AWS API gateway and AWS Cloud Front micro-services',
            'Upgraded authentication services to use Auth0 instead of the complex AWS microservices other teams were having trouble maintaining.',
            'Created APIs and UI components for various compliance and management features.',
            'Created Automated tests with Selenium and Cypress'
        ]
    },
    {
        title: '.NET Engineer @ Microsoft Games',
        img: {
            src: MSGames.src
        },
        description: '',
        duration: 'Oct 2021 - Apr 2022',
        skills: ['React', 'ASP.Net', 'Sharepoint', 'Amazon Experience Manager'],
        skillBreakdown: [30, 20, 0, 30, 20, 0, 0],
        achievements: [
            'Created 2022 Game Developers’ Conference Page: https://developer.microsoft.com/en-us/games/events/gdc/2023/',
            'Developed playfab price calculator: https://playfab.com/mps-calculator/',
            'Developed and maintained web applications for gaming events and server pricing calculators.',
            'Migrated content manage system to Amazon Experience Manager from Sharepoint'
        ]
    },
    {
        title: 'Java Developer @ Capital One',
        img: {
            src: CapOne.src
        },
        description: '',
        duration: 'Aug 2021 - Mar 2022',
        skills: ['Springboot', 'Java', 'React', 'Strapi'],
        skillBreakdown: [20, 30, 10, 30, 5, 0, 5],
        achievements: [
            'Contributed to the BRLR team on business-facing web applications, focusing on backend development.',
            'Improved Capital Ones CLI tools significantly. Reducing tons of commands to a single line',
            'Mentored by one of my favorite developers.',
            'Created Automated tests with Cypress'
        ]
    },
    {
        title: 'GIS Engineer @ Papa Johns',
        img: {
            src: PapaJohns.src
        },
        description: '',
        duration: 'Apr 2021 - Aug 2021',
        skills: ['Angular', 'Vanilla JS', 'ArcGIS', 'Dialog Flow'],
        skillBreakdown: [30, 10, 10, 20, 20, 30, 0],
        achievements: [
            'Developed an automated chatbot with live agent support and redesigned the checkout and delivery tracking pages.',
            'Migrated vanilla JS user interfaces to Angular 13',
            'Performed GIS analysis using ESRI products.',
            'Created Automated tests Cypress with Selenium'
        ]
    },
    {
        title: 'Offline-mode Engineer @ Clarity Innovations',
        img: {
            src: Clarity.src
        },
        description: 'Jul 2020 - Mar 2021',
        duration: 'Mar 2020 - Dec 2021',
        skills: ['Springboot', 'Go', 'Flutter', 'React.js'],
        skillBreakdown: [30, 20, 20, 10, 10, 10, 0],
        achievements: [
            'Analyzed data and created visualizations for staging and production environments',
            'Created Automated tests with Selenium'
        ]
    },
    {
        title: 'Accessibility Engineer @ GDIT',
        img: {
            src: GDIT.src
        },
        description: '',
        duration: 'Jul 2019 - Jul 2020',
        skillBreakdown: [40, 20, 10, 30, 10, 0, 0],
        achievements: [
            'Developed a video player/library with voice controls, a support chatbot, and a portal page with 2FA.'
        ]
    },
    {
        title: 'Deep Learning Engineer @ SC Logic',
        img: {
            src: SCLogic.src
        },
        description: '',
        duration: 'Feb 2018 - Jun 2019',
        skills: ['ASP.Net', 'Deep Learning', 'Azure', 'AWS Sage Maker'],
        skillBreakdown: [25, 20, 10, 20, 0, 0, 25],
        achievements: [
            'Developed the Intra application with asset/mail tracking features and smart mailroom lockers using deep learning technology.',
            'Used ioT devices to create smart mail room system that triggered lambda functions and rest api calls when people in the mail room interacted with them',
            'Trained deep learning video models to classify different types of shipping labels',
            'Wrote advanced TSQL to fix hundreds of thousands of database values stored incorrectly',
            'Created Automated tests with Cypress'
        ]
    },
    {
        title: 'Lead Developer @ Reality AI',
        img: {
            src: RealityAI.src
        },
        description: '',
        duration: 'Oct 2015 - Feb 2018',
        skills: ['Angular', 'ArcGIS', 'Machine Learning', 'C#'],
        skillBreakdown: [20, 10, 5, 5, 10, 30, 30],
        achievements: ['Led development for UAV Tools and Machine Health projects, enabling GIS analysts to create classifiers and detect machine failures using machine learning.']
    },
    {
        title: 'Android Developer @ Directed Electromagnetics',
        img: {
            src: DirectedElec.src
        },
        description: '',
        duration: 'Jun 2015 - Oct 2015',
        skills: ['Android Studio', 'Java', 'Google Maps API', 'Node.js'],
        skillBreakdown: [0, 10, 40, 10, 10, 30, 0],
        achievements: ['']
    },
    {
        title: 'Geospatial UI/UX Engineer @ Urbana Real Estate',
        img: {
            src: UrbanaRE.src
        },
        description: '',
        duration: 'Jun 2015 - Oct 2015',
        skills: ['Springboot', 'PHP', 'Angular', 'Google Maps API'],
        achievements: ['Developed Atlas, an Android app providing real-time updates on state laws.'],
        skillBreakdown: [20, 10, 0, 20, 20, 30, 0]
    },
    {
        title: 'Graphic Design @ Pype.io',
        img: {
            src: Pype.src
        },
        description: 'Dec 2014 - May 2015',
        duration: 'Jun 2019, Aug 2019',
        skills: ['Graphic Design', 'PHP', 'Angular', 'Tech. Support'],
        skillBreakdown: [20, 20, 20, 20, 20, 0, 0],
        achievements: ['Supported development, created charts, graphics, and UI mock-ups for construction closeout documents.']
    },
];

export default experienceData