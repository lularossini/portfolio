

export interface IProjects {
  id: string;
  name: string;
  period: string;
  role: string;
  details: (
    | string
    | {
        type: 'link';
        href: string;
        text: string;
        width?: string;
        height?: string;
        marginBottom: number;
        marginTop: number;
      }
    | {
        type: 'image' | 'video';
        src: string;
        mobileVersionSrc?: string;
        width?: string;
        height?: string;
        marginBottom: number;
        marginTop: number;
        imageDescription: string;
        widthImageDescription?: string;
      }
    | {
        type: 'carousel';
        srcImages: string[];
        width?: string;
        height?: string;
        marginBottom?: number;
        marginTop?: number;
        imageDescription?: string[];
        widthImageDescription?: string;
        interval?: number;
      }
  )[];
}


/////////////////////////////////////////////////////////////////////////////////////
// implementar que sea string o un objeto que tiene el src de la imagen, marginTop, marginBottom, comentario de la foto

export const projects: IProjects[] = [

  { 
    id: 'case1',
    name: 'TYR',
    period: 'Case Study',
    role: 'A new internal system to enhace the experience',
    details: [
      '<b>About',
      'TYR is a company that specializes in commodity trading. This means they focus on buying and selling raw materials, like oil, metals, and agricultural products. Also connects producers and buyers of raw materials and handles the logistics of getting these materials where they need to go.',
      
      '<b>The problem',
      'TYR faced major issues with their system, including slow response times due to high data volume, a steep learning curve for new employees, and information duplication. Forms were too long and redundant, workflows were confusing, and sequential use by traders and administrators led to frequent errors, requiring the owners intervention.',
      
      '<b>My role',
      'UX Research',
      'UX Design',
      'UX Writing',

      '<b>Tools',
      'Figma',
      'Figjam',
      'Zoom',

      '<b>Timeline & Team',
      '1 month to design',
      '1 UX 1 UI, 2 devs, 1 Project Manager',

    'As the UX designer for the project, I was in charge from the beginning. I had the initial conversations with the client to understand their business vision and identify the issues they had noticed and wanted to improve, as well as what aspects they wanted to keep because they were working well. I also requested access to the system we were going to redesign. With this access, I conducted a brief research to understand the current system, map out the workflows, and identify obvious usability improvements we could apply. With this, we began the wireframing stage.',
    'We had tight one-week sprints and two weekly meetings with the client to make inquiries and review the progress.',
    {
      type: 'image',
      src: '/images/plumarii/logo_plumarii.png',
      width: '100%',
      marginBottom: 30,
      marginTop: 30,
      imageDescription: 'summarize of the research from project tyr',
    },

    '<b>The results',
    '100%',
    'was the reduction in duplication errors due to the redesign, which incorporated mandatory fields and blocked certain fields from being modified by specific user types.',
    
    '60%',
    'was the reduction in employee training time after redesigning the system with a focus on improving usability. This allowed experienced employees to focus on their tasks, enhancing the overall efficiency of the company.',

    '50%',
    'was the reduction in load time as we reduced the number of fields in each form and eliminated duplicate fields that caused double entries and, consequently, double the time.',
    {
      type: 'image',
      src: '/images/plumarii/logo_plumarii.png',
      width: '100%',
      marginBottom: 30,
      marginTop: 30,
      imageDescription: 'carrousel screens of hi fi project',
      
    },

    '<b>Reflections',
    'The project was large and very complex, primarily because we had to base our work on a system with so many usability issues while needing to maintain certain structures. Additionally, the raw materials business model includes multiple actors and processes that had to be considered when thinking about new ways to present the workflows.',
    'The greatest difficulty was that we had very little design time, yet it needed to work. Therefore, it was decided to conduct research but to do so quickly, in order to have information to focus on what users needed while still meeting the deadlines for delivering the final UI.',
    'The key learning from this process was that we need to embrace the unknown and ask many questions along the way. For this, it is crucial to have the business on our side and always keep them informed of our progress. This allowed us to iterate and improve quickly and effectively.',


  'Previous project',
  'Next project',

  'Home',
  'Resume',
  'LikedIn',
    ]
  },

 
  {
    id: 'case2',
    name: 'Abitab',
    period: 'Case Study',
    role: 'GIVING URUGUAYANS A DIGITAL IDENTITY',
    details: [
      '<b>About',
      'Abitab is a Uruguayan company offering services like bill payments, money transfers, and mobile top-ups. One of its products, Abitab Mobile Identity, enables users to access public websites and perform tasks like paying taxes and scheduling appointments. To become the leading digital identity service in Uruguay, Abitab needed to significantly enhance its user experience and technology.',      
      
      
      '<b>The problem',
      'To achieve digital identity registration, we evaluated the existing web and app channels for usability issues.',
      
      'Our analysis revealed several key problems:',
      '(ESTO VA EN NEGRITA CON PUNTEO) Diverse access points: Multiple websites with different logos, aesthetics, and content caused user confusion.',
      'Inconsistent terminology: Varied terms for "Mobile Identity" across channels led to user confusion during account creation and service use.',
      'App upgrade needed: The native app, initially a token, was disconnected from the website, missing opportunities for enhanced functionality and user engagement.',


      '<b>My role',
      'UX Research',
      'UX Design',
      'UX Writing',

      '<b>Tools',
      'Figma',
      'Figjam',
      'Zoom',

      '<b>Timeline & Team',
      '3 months to design',
      '1 UX Designer 1, Product Designer, 10 devs, 1 Project Manager',

      '<b>The Design System',
      'Since we had a developed product, many elements of the Design System came predefined beforehand: colours, icons, typography, among others.',
      'The job was to design the screens and create new elements that would complement the current design system and adapt it to have a more user-centered product.',
      'This approach brought new icons, larger typography, process steppers, a brand new logo, and a great effort put on UX writing to ensure clarity as many concepts were new to users.',

    
    {
      type: 'image',
      src: '/images/plumarii/logo_plumarii.png',
      width: '100%',
      marginBottom: 30,
      marginTop: 30,
      imageDescription: 'imagen del design system',
    },

    '<b>Hi-Fi screens',
    'Due to the limited design hours allocated for the project, a prioritization was conducted, and it was decided not to create wireframes and proceed directly to high-fidelity designs.',
    'The central idea of the application was to carry out the process in well-defined steps to reduce possible user anxieties about where they were in the process and to decrease registration times, making it much more efficient.',
    'In terms of visuals, the previously defined definitions extracted from the design system that Abitab had were applied, and it was proposed to the client to modify some colors within the color palette to make them accessible following the current web accessibility regulations.',

    {
      type: 'image',
      src: '/images/plumarii/logo_plumarii.png',
      width: '100%',
      marginBottom: 30,
      marginTop: 30,
      imageDescription: 'imagenes en carrousel de las pantallas',
    },

   '<b> Testing with real users',
    'Usability testing is crucial for gathering insights into user experience and design effectiveness. To gather this information, we conducted 10 usability tests of Abitabs product.',
    'After completing the initial designs, I proposed moderated usability testing to validate our decisions.',  
    'We designed a simple prototype in Figma, which you can view here.',
    'I managed all aspects of the tests, including creating the user list, designing the script, setting up tests in Useberry, obtaining incentives, and conducting both in-person and remote tests. Five tests were in-person, and five were virtual, each lasting about 30 minutes.',
    'Participants included a diverse user base, from retirees to professionals. These tests provided valuable insights, guiding strategic product modifications to align with user needs.',
    'Based on the tests, I created a report with key insights, improvement points, and recommendations, which I presented to the client.',

    {
      type: 'image',
      src: '/images/plumarii/logo_plumarii.png',
      width: '100%',
      marginBottom: 30,
      marginTop: 30,
      imageDescription: 'imagen 1 test de usabilidad',
      
    },
    {
      type: 'image',
      src: '/images/plumarii/logo_plumarii.png',
      width: '100%',
      marginBottom: 30,
      marginTop: 30,
      imageDescription: 'imagen 2 de test de usabilidad',
    },




    '<b>The results',
    '90%',
    'of users expressed high satisfaction with the overall user experience, highlighting the app\'s ease of use and intuitive design.',
    
    '95% ',
    'of users found the app\'s design clear and easy to understand, which facilitated navigation and task completion.',

    '85%',
    'of users found the registration process quick and straightforward, rating it as \'super short\' or \'short\'',
    
    {
      type: 'image',
      src: '/images/plumarii/logo_plumarii.png',
      width: '100%',
      marginBottom: 30,
      marginTop: 30,
      imageDescription: 'carrousel screens of hi fi project',
      
    },

    '<b>Reflections',
    'This redesign was quite a challenge given that our team was large, so we had to be very organized and maintain constant communication to implement changes as quickly as possible. We also learned a lot about client communication, as at the beginning of the project, we had few meetings and were experiencing many changes from their side. As a result, we decided to have three weekly meetings to ensure everyone was on the same page.', 
    'This significantly improved the speed of iteration, considering it was a project with many technical challenges and the need to communicate these effectively through the design to users.',
    'Finally, the project was discontinued due to a lack of budget and was not completed.',

  'Previous project',
  'Next project',

  'Home',
  'Resume',
  'LikedIn',
    ],
  },

  {
    id: 'case3',
    name: 'Properati',
    period: 'Case Study',
    role: 'A RESPONSIVE WEB TO HELP SELLERS WORK QUICKLY AND EFFICENTLY',
    details: [
      {
        type: 'image',
        src: '/images/plumarii/logo_plumarii.png',
        width: '100%',
        marginBottom: 30,
        marginTop: 30,
        imageDescription: 'imagen de portada Properati',
      },
      '<b>About',
      'Properati has a transactional branch that connects users wanting to buy a house with real state experts that helps them find the property they dreamed about.',      
      
      
      '<b>The problem',
      'Real estate experts work every day with multiple clients simultaneously and have to send various proposals to all of them, each of which always includes more than one property.',
      'The main pain point for the experts was that the search and presentation of properties were being done manually, which was time-consuming and caused delays in the commercial process.',
      'Additionally, clients interested in buying houses often need a fast response and a visually pleasing proposal. Since we didn\'t have either of these, we were losing clients.',
      'Due to the necessity of solving all these problems, we were asked to create a solution as soon as possible.',



      '<b>My role',
      'UX Design',
      'UX Writing',

      '<b>Tools',
      'Figma',
      'Miro',

      '<b>Timeline & Team',
      '1 month to design',
      '1 UX Designer, 1 Product maganer, 3 devs',

      '<b>User interviews & user journey',
      'We started interviewing a selected group of real estate experts to map the expert\'s User Journey.',
      'Until that point, there was no defined methodology for work. Each expert used different tools to do the same job, contacted clients through various channels, and there was no defined script for talking to potential clients nor any follow-up after the initial contact, among other issues.',
      'All interviews were conducted virtually with experts from Colombia, Ecuador, and Peru. While we gathered answers, many new questions also arose.',
      'The key discovery was that the proposal served as a property display. Clients would select properties they liked and schedule visits with the expert. Thus, the proposal needed a feature for scheduling appointments.',
      'Experts emphasized the importance of highlighting certain parts of the proposal, such as images and property prices, as clients often discard properties if the price isn’t right. Additionally, for new projects, the completion date was crucial to include in the proposal design.',
    
      '<b>The design',

      'Since the commercial proposal was going to be part of Properati’s ecosystem, we decided to maintain the brand style guide.',
      'The only thing we wanted to add to the design was illustrations, so we used an illustration bank and defined the aesthetics and tone for the rest of the company to ensure a unified approach regarding these elements.',
   
      '<b>Wireframes',

      {
        type: 'image',
        src: '/images/plumarii/logo_plumarii.png',
        width: '100%',
        marginBottom: 30,
        marginTop: 30,
        imageDescription: 'imagen de celular mobile wireframe',
      },
  

    '<b>Hi-Fi screen',
    'Due to the limited design hours allocated for the project, a prioritization was conducted, and it was decided not to create wireframes and proceed directly to high-fidelity designs.',
    'The central idea of the application was to carry out the process in well-defined steps to reduce possible user anxieties about where they were in the process and to decrease registration times, making it much more efficient.',
    'In terms of visuals, the previously defined definitions extracted from the design system that Abitab had were applied, and it was proposed to the client to modify some colors within the color palette to make them accessible following the current web accessibility regulations.',

    {
      type: 'image',
      src: '/images/plumarii/logo_plumarii.png',
      width: '100%',
      marginBottom: 30,
      marginTop: 30,
      imageDescription: 'imagen de celular mobile hifi',
    },

  

    '<b>The results',
    '150%',
    'increase in the number of scheduled appointments, highlighting the effectiveness of the redesign in facilitating easier and more frequent scheduling of property visits by clients.',
    
    '100% ',
    'increase in the client response rate, demonstrating the effectiveness of the redesign in making proposals more responsive and appealing to clients.',

    '67%',
    'reduction in proposal creation time, allowing real estate experts to focus more on client interactions and closing deals.',
    
 
    '<b>Reflections',
    'The commercial proposal was created to solve a huge time and speed issue with customers that are in the search of a new home.', 
    'We construct a design for a new product based on a research investigation focused on the experts and also on the clients.',
    'We also created a backlog with ideas that could not be included in this first iteration due to time constraints but will make the proposal much more efficient and attractive',
    'Additionally, we designed a small survey for sellers to give to their clients regarding the new commercial proposal, asking about things that do not work or features they would like to have. This will help us gather ideas to incorporate into future versions.',

  'Previous project',
  'Next project',

  'Home',
  'Resume',
  'LikedIn',
    ],
  },
 
  {
    id: 'case4',
    name: 'Proppit',
    period: 'Case Study',
    role: ' REDUCING CHURN BY UNDERSTANDING USERS',
    details: [
      {
        type: 'image',
        src: '/images/plumarii/logo_plumarii.png',
        width: '100%',
        marginBottom: 30,
        marginTop: 30,
        imageDescription: 'imagen de portada Proppit',
      },
      '<b>About',
      'This research was carried out for Proppit, an online marketing platform to manage and publish estate mainly oriented to real estate professionals. Nowadays the web is online in Chile, Argentina, Perú, Colombia, Ecuador, Panamá, Philippines & Thailand.',      
      
      
      '<b>The problem',
      'Our UXR team of two was tasked with understanding why customers weren’t renewing their subscriptions on Proppit and finding solutions to reduce churn from 9% to 5%.',
      'The target audience for this research was customers from Colombia who had churned within 90 days of activation.',
      'Working independently yet collaboratively across the company, we met with Proppit stakeholders to present and adjust our plan, which had a maximum duration of one month.',
      'The plan involved first analyzing existing customer data and then conducting phone interviews. The main challenges were recruiting customers for interviews without incentives and conducting the initial phase by phone.',



      '<b>My role',
        'UX Design',
        'UX Research',

      '<b>Tools',
        'Figma',
        'Excel',

      '<b>Timeline & Team',
        '3 weeks to do research',
        '1 UX Designer, 1 UX Researcher',

      '<b>Steps with deadlines for each stage of the research discussed with stakeholders',
      
      'Step 1',
      'Survey Interview Preparation',
        'Analysis and cross customer data Churn',
        'Design interview script',
        'Interview script design Tel',
        'Recruitment 1',
        'Recruitment 2 (1st mail)',
        'Recruitment form',

      'Step 2',
      'Recruitment & Interviews',
        'Recruitment 3 (phone)',
        'Conducting interviews',
        'Preliminary synthesis insights interviews',
        'Qualitative feedback analysis',


      'Step 3',
      'Interview results',
        'Conducting interviews',
        'Final report interview results',

      'Step 4',
      'Final results report',
          'Analysis of activation and renewal flows (optional)',
          'Final report of research results',

      'To develop this project we followed the lines of the Double Diamond methodology and as a team, we generated deliverables for the first two phases: for Discovery and in the Define phase.',
      
      {
        type: 'image',
        src: '/images/plumarii/logo_plumarii.png',
        width: '100%',
        marginBottom: 30,
        marginTop: 30,
        imageDescription: 'imagen de double diamond para mobile',
      },
  

    '<b>Stage 1: Customer Information Analysis',
    'In the first stage, we analyzed existing data from Proppit\'s customers to minimize the need for high investment. We requested access to customer complaint/request emails and NPS survey results.',
    'We reviewed 137 emails from an 8-month period and 500 NPS messages. The emails revealed urgent issues and needs, while the NPS responses highlighted customer grievances and suggestions.',
    'We compiled all the information into an Excel sheet, categorized it, and created quantitative graphs per topic.',

 
  

    '<b>Stage 2: Interviewing Unsubscribed Users',
    'In the second stage, we interviewed customers who did not renew their subscriptions to understand their pain points and reasons for churn.',
    
    'We requested a list of customers who had been active for less than 90 days, were from Colombia, and had unsubscribed. Initially, we had no incentives, resulting in a low response rate and extended timeline. When incentives were later provided, we had already reached theoretical saturation and stopped interviewing.',
    
    'Interviews were conducted by phone, as per stakeholder request, but we recommended video calls for richer interaction. We called users first to set up video calls, defaulting to phone interviews if video calls were not feasible',
    'increase in the client response rate, demonstrating the effectiveness of the redesign in making proposals more responsive and appealing to clients.',

    'To ensure effective follow-up, we prepared several tools:',
    '1.User recruitment spreadsheet',
    '2.Recruitment email',
    '3.Calendly setup for scheduling',
    '4.Reminder messages via Whatsapp',

    'For detailed tools and scripts, you can view the documents by clicking here.',

  
 
    '<b>Findings from the Research',
    'After completing stages 1 and 2, we prepared the final report, including: a General Report, the detailed interview report vith visual cards (5 cards form 14 interviews), qualitative feedback analysis report, excel sheet vith interviewed customers',

    'We noted that users often provided multiple reasons for churn, considering the first mentioned as the most significant. We created two graphs: one for main reasons and another combining main and secondary reasons.',
    
    '<b>Key findings',
       '50%',
          'of users cited the lack of leads or poor lead conversion as the main reason for churn.',
        '15.3%',
            'of the users went to or used stronger competitors (Finca Raíz).',
        '11.5%',
            'felt they wasted their money.',
        '11.5%',
          'mentioned mistreatment in customer service.',
        '7.6%',
            'was the cost and/or lack of smaller plans suitable for small real estate agencies.',
        '7.6%',
            'of the users had initial account activation problems.',
        
     'These reasons were consistent with issues mentioned in customer emails and NPS survey responses analyzed in stage 1.',

     '<b>Summary and Conclusion',

     'The research identified clear user pain points, leading to concrete improvement solutions that could solve the churn problem:',
        '1.Offer smaller plans for small clients',
        '2.Improve the payment/renewal process by adding features for users to self-manage invoices and report payments',
        '3.Enhance initial account activation with an automatic system for new customers',
        '4.Provide training through webinars or a YouTube channel to help customers better utilize the platform',

'Our research team provided these insights to the product team for implementation.',

'The presented data serves as a baseline to measure the impact of future improvements.',

'A few months after completing this research, the research team and other employees in Argentina were laid off, leaving no information on the implemented improvements.',

  'Previous project',
  'Next project',

  'Home',
  'Resume',
  'LikedIn',
    ],
  },

];

