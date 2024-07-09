//Aplicar b a palabras en results
//quitar bold generalizado de results

export interface IProjects {
  id: string;
  details: (
    | string
    | {
        type: 'title';
        text: string;
        marginBottom: number;
        marginTop: number;
      }
     
    |{
      type: 'image';
      desktopSrc: string;
      desktopMode: '100%' | 'full width' | 'customWidth';
      mobileSrc: string;
      mobileMode: '100%' | 'full width' | 'customWidth';
      customWidthDesktop?: string;
      customWidthMobile?: string;
      marginBottom: number;
      marginTop: number;
    }
    
  )[];
}

/////////////////////////////////////////////////////////////////////////////////////
// implementar que sea string o un objeto que tiene el src de la imagen, marginTop, marginBottom, comentario de la foto

///EMPIEZA TYR
/////////////////////////////////////////////////////////////////////////////////////
export const projects: IProjects[] = [
  {
    id: 'tyr-case',

    details: [
          
      {
        type: 'title',
        text: 'About',
        marginBottom: 0,
        marginTop: 30,
      },
      'TYR is a company that specializes in <b>commodity trading</b>. This means they focus on <b>buying and selling raw materials</b>, like oil, metals, and agricultural products. Also <b>connects producers and buyers</b> of raw materials and <b>handles the logistics</b> of getting these materials where they need to go.',

      {
        type: 'title',
        text: 'The problem',
        marginBottom: 0,
        marginTop: 40,
      },
      'TYR faced major issues with their system, including slow response times due to high data volume, a steep learning curve for new employees, and information duplication. Forms were too long and redundant, workflows were confusing, and sequential use by traders and administrators led to frequent errors, requiring the owners intervention.',
//Comment andy: La imagen roles-table-tyr-mobile.svg, que está abajo de este comment, tiene que tomar el 100% en mobile
          
      {
        type: 'image',
        desktopSrc: '/tyr/desktop/roles-in-project-tyr-desktop.svg',
        desktopMode: '100%',
        mobileSrc: '/tyr/mobile/roles-table-tyr-mobile.png',
        mobileMode: 'customWidth',  
        customWidthMobile: '350px',    
        marginBottom: 30,
        marginTop: 50,      
      },

     
//Para después: estos son textos para cuando haya que sacar la imagen de roles y maquetar
// '<b>My role</b>',
    //   'UX Research',
    //   'UX Design',
    //   'UX Writing',

    //   '<b>Tools</b>',
    //   'Figma',
    //   'Figjam',
    //   'Zoom',

    //   '<b>Timeline & Team</b>',
    //   '1 month to design',
    //   '1 UX 1 UI, 2 devs, 1 Project Manager',

      'As the UX designer for the project, I was in charge from the beginning. I had the initial conversations with the client to understand their business vision and identify the issues they had noticed and wanted to improve, as well as what aspects they wanted to keep because they were working well. I also requested access to the system we were going to redesign. With this access, I conducted a brief research to understand the current system, map out the workflows, and identify obvious usability improvements we could apply. With this, we began the wireframing stage.',
      'We had tight one-week sprints and two weekly meetings with the client to make inquiries and review the progress.',
      
//Comment andy: La imagen image-research-desktop.svg, que está abajo de este comment, tiene que tomar el 100% en desktop   
      {
        type: 'image',
        desktopSrc: '/tyr/desktop/image-research-desktop.svg',
        desktopMode: '100%',
        mobileSrc: '/tyr/mobile/image-research.png',
        mobileMode: '100%',      
        marginBottom: 50,
        marginTop: 50,      
      },

//Comment andy: La imagen the-results-tyr-mobile.svg, que está abajo de este comment, tiene que tomar el 100% en mobile

      {
        type: 'image',
        desktopSrc: '/tyr/desktop/the-results-desktop.svg',
        desktopMode: '100%',
        mobileSrc: '/tyr/mobile/the-results-tyr-mobile.png',
        mobileMode: 'customWidth',  
        customWidthMobile: '350px',     
        marginBottom: 50,
        marginTop: 20,      
      },
  

//Para después: estos son textos para cuando haya que sacar la imagen de Results y maquetar
      // {
      //   type: 'title',
      //   text: 'The results',
      //   marginBottom: 20,
      //   marginTop: 20,
      // },

      // {
      //   type: 'results',
      //   percentages: [' 100%', '60%', '50%'],
      //   texts: [
      //     "was the <b>reduction in duplication errors</b> due to the redesign, which incorporated mandatory fields and blocked certain fields from being modified by specific user types.",
      //     "was the <b>reduction in employee training time</b> after redesigning the system with a focus on improving usability. This allowed experienced employees to focus on their tasks, enhancing the overall efficiency of the company.",
      //     "was the <b>reduction in load time</b> as we reduced the number of fields in each form and eliminated duplicate fields that caused double entries and, consequently, double the time.",
      //   ],
      //   marginBottom: 30,
      //   marginTop: 30,
      // },
      

      {
        type: 'title',
        text: 'HI-FI Screens',
        marginBottom: 0,
        marginTop: 20,
      },
      
//Comment andy: La imagen slider-hi-fi-tyr-desktop.svg, que está abajo de este comment, tiene que tomar el 100% en dekstop.
//Tambien la imagen hi-fi-mobile-tyr.svg, tiene que tomar el 100% en mobile
          {
            type: 'image',
            desktopSrc: '/tyr/desktop/slider-hi-fi-tyr-desktop.svg',
            desktopMode: 'full width',
            mobileSrc: '/tyr/mobile/hi-fi-mobile-tyr.svg',
            mobileMode: 'full width',      
            marginBottom: 50,
            marginTop: 30,      
          },         

         {
        type: 'title',
        text: 'Reflections',
        marginBottom: 0,
        marginTop: 20,
      },

      'The project was large and very complex, primarily because we had to base our work on a system with so many usability issues while needing to maintain certain structures. Additionally, the raw materials business model includes multiple actors and processes that had to be considered when thinking about new ways to present the workflows.',
      'The greatest difficulty was that we had very little design time, yet it needed to work. Therefore, it was decided to conduct research but to do so quickly, in order to have information to focus on what users needed while still meeting the deadlines for delivering the final UI.',
      'The key learning from this process was that we need to embrace the unknown and ask many questions along the way. For this, it is crucial to have the business on our side and always keep them informed of our progress. This allowed us to iterate and improve quickly and effectively.',
    ],
  },
///TERMINA TYR CASE
/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
///EMPIEZA ABITAB CASE

  {
    id: 'abitab-case',

    details: [
      {
        type: 'title',
        text: 'About',
        marginBottom: 8,
        marginTop: 20,
      },
      'Abitab is a Uruguayan company offering services like bill payments, money transfers, and mobile top-ups. One of its products, <b>Abitab Mobile Identity, enables users to access public websites</b> and perform tasks like paying taxes and scheduling appointments. To become the leading digital identity service in Uruguay, Abitab needed to significantly enhance its user experience and technology.',

      {
        type: 'title',
        text: 'The problem',
        marginBottom: 0,      
        marginTop: 40,
      },

//Comment andy: La imagen the body-problem-abitab.svg, que está abajo de este comment, tiene que tomar el 100% en mobile

      {
        type: 'image',
        desktopSrc: '/abitab/desktop/problem-body-abitab-desktop.svg',
        desktopMode: '100%',
        mobileSrc: '/abitab/mobile/body-problem-abitab.png',
        mobileMode: 'customWidth',  
        customWidthMobile: '350px',  
        marginBottom: 20,
        marginTop: 20,      
      },   
  

////Para después: estos son textos de THE PROBLEM para cuando haya que sacar la imagen y maquetar, la imagen esta arriba
      // 'To achieve digital identity registration, we evaluated the existing web and app channels for usability issues.',

      // 'Our analysis revealed several key problems:',

      // '<b>Diverse access points</b>: Multiple websites with different logos, aesthetics, and content caused user confusion.',
      // '<b>Inconsistent terminology</b>: Varied terms for "Mobile Identity" across channels led to user confusion during account creation and service use.',
      // '<b>App upgrade needed</b>: The native app, initially a token, was disconnected from the website, missing opportunities for enhanced functionality and user engagement.',


//Comment andy: La imagen roles-in-project-mobile-abitab.svg, que está abajo de este comment, tiene que tomar el 100% en mobile
      
      {
        type: 'image',
        desktopSrc: '/abitab/desktop/roles-in-project-abitab-desktop.svg',
        desktopMode: '100%',
        mobileSrc: '/abitab/mobile/roles-in-project-mobile-abitab.png',
        mobileMode: 'customWidth',  
        customWidthMobile: '350px',        
        marginBottom: 20,
        marginTop: 20,      
      },   


   ////Para después: estos son textos de MY ROLE para cuando haya que sacar la imagen y maquetar, la imagen está arriba

      // '<b>My role</b>',
      // 'UX Research',
      // 'UX Design',
      // 'UX Writing',

      // '<b>Tools</b>',
      // 'Figma',
      // 'Figjam',
      // 'Zoom',

      // '<b>Timeline & Team</b>',
      // '3 months to design',
      // '1 UX Designer 1, Product Designer, 10 devs, 1 Project Manager',

        {
        type: 'title',
        text: 'The Design System',
        marginBottom: 10,
        marginTop: 40,
      },

      'Since we had a developed product, many elements of the Design System came predefined beforehand: colours, icons, typography, among others.',
      'The job was to design the screens and create new elements that would complement the current design system and adapt it to have a more user-centered product.',
      'This approach brought new icons, larger typography, process steppers, a brand new logo, and a great effort put on UX writing to ensure clarity as many concepts were new to users.',

      {
        type: 'image',
        desktopSrc: '/abitab/desktop/design-system.svg',
        desktopMode: '100%',
        mobileSrc: '/abitab/mobile/design-system-abitab-mobile.svg',
        mobileMode: 'customWidth',  
        customWidthMobile: '350px',        
        marginBottom: 20,
        marginTop: 30,      
      },   
     
        {
        type: 'title',
        text: 'Hi-Fi Screens',
        marginBottom: 10,
        marginTop: 40,
      },
      'Due to the limited design hours allocated for the project, a prioritization was conducted, and it was decided not to create wireframes and proceed directly to high-fidelity designs.',
      'The central idea of the application was to carry out the process in well-defined steps to reduce possible user anxieties about where they were in the process and to decrease registration times, making it much more efficient.',
      'In terms of visuals, the previously defined definitions extracted from the design system that Abitab had were applied, and it was proposed to the client to modify some colors within the color palette to make them accessible following the current web accessibility regulations.',

      {
        type: 'image',
        desktopSrc: '/abitab/desktop/telefonos-desktop.svg',
        desktopMode: 'full width',
        mobileSrc: '/abitab/mobile/telefonos-mobile.svg',
        mobileMode: 'full width',      
        marginBottom: 30,
        marginTop: 40,      
      }, 


      {
        type: 'title',
        text: 'Testing with real users',
        marginBottom: 20,
        marginTop: 20,
      },
      'Usability testing is crucial for gathering insights into user experience and design effectiveness. To gather this information, we conducted 10 usability tests of Abitabs product.',
      'After completing the initial designs, I proposed moderated usability testing to validate our decisions.',
      'We designed a simple prototype in Figma, which you can view here.',
      'I managed all aspects of the tests, including creating the user list, designing the script, setting up tests in Useberry, obtaining incentives, and conducting both in-person and remote tests. Five tests were in-person, and five were virtual, each lasting about 30 minutes.',
      'Participants included a diverse user base, from retirees to professionals. These tests provided valuable insights, guiding strategic product modifications to align with user needs.',
      'Based on the tests, I created a report with key insights, improvement points, and recommendations, which I presented to the client.',

//Comment andy: La imagen usability-image-desktop.svg, que está abajo de este comment, tiene que tomar el 100% en desktop
    {
      type: 'image',
      desktopSrc: '/abitab/desktop/usability-image-desktop.svg',
      desktopMode: 'full width',
      mobileSrc: '/abitab/mobile/usability-image-mobile.svg',
      mobileMode: 'customWidth',  
      customWidthMobile: '350px',        
      marginBottom: 10,
      marginTop: 40,      
    }, 

//Comment andy: La imagen the results-desktop-abitab.svg, que está abajo de este comment, tiene que tomar el 100% en mobile
      {
        type: 'image',
        desktopSrc: '/abitab/desktop/the results-desktop-abitab.svg',
        desktopMode: '100%',
        mobileSrc: '/abitab/mobile/results-abitab-mobile.png',
        mobileMode: 'customWidth',  
        customWidthMobile: '350px',     
        marginBottom: 30,
        marginTop: 40,      
      }, 
    

////Para después: estos son textos de RESULTS para cuando haya que sacar la imagen y maquetar, la imagen está arriba
      // {
      //   type: 'results',
      //   percentages: ['90%', '95%', '85%'],
      //   texts: [
      //     "of users expressed <b>high satisfaction</b> with the overall <b>user experience</b>, highlighting the app's ease of use and intuitive design.",
      //     "of users found the <b>app's design clear and easy to understand</b>, which <b>facilitated navigation and task completion.</b>",
      //     "of users found the <b>registration process quick and straightforward</b>, rating it as 'super short' or 'short'",
      //   ],
      //   marginBottom: 30,
      //   marginTop: 30,
      // },
   

      {
        type: 'title',
        text: 'Reflections',
        marginBottom: 0,
        marginTop: 20,
      },
      'This redesign was quite a challenge given that our team was large, so we had to be very organized and maintain constant communication to implement changes as quickly as possible. We also learned a lot about client communication, as at the beginning of the project, we had few meetings and were experiencing many changes from their side. As a result, we decided to have three weekly meetings to ensure everyone was on the same page.',
      'This significantly improved the speed of iteration, considering it was a project with many technical challenges and the need to communicate these effectively through the design to users.',
      'Finally, the project was discontinued due to a lack of budget and was not completed.',  
    ],
  },

///TERMINA ABITAB
/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
///EMPIEZA PROPERATI 


  {
    id: 'properati-case',

    details: [      
      {
        type: 'title',
        text: 'About',
        marginBottom: 8, 
        marginTop: 20,
               
      },

      'Properati has a transactional branch that connects users wanting to buy a house with real state experts that helps them find the property they dreamed about.',

      {
        type: 'title',
        text: 'The problem',
        marginBottom: 8,
        marginTop: 50,           
      },


      'Real estate experts work every day with multiple clients simultaneously and have to send various proposals to all of them, each of which always includes more than one property.',
      'The main pain point for the experts was that the search and presentation of properties were being done manually, which was time-consuming and caused delays in the commercial process.',
      "Additionally, clients interested in buying houses often need a fast response and a visually pleasing proposal. Since we didn't have either of these, we were losing clients.",
      'Due to the necessity of solving all these problems, we were asked to create a solution as soon as possible.',


//Comment andy: La imagen the roles-in-project-mobile.svg, que está abajo de este comment, tiene que tomar el 100% en mobile
     
    {
      type: 'image',
      desktopSrc: '/properati/desktop/roles-in-project-desktop.svg',
      desktopMode: '100%',
      mobileSrc: '/properati/mobile/roles-in-project-mobile.png',
      mobileMode: 'customWidth',  
      customWidthMobile: '350px',        
      marginBottom: 0,
      marginTop: 40,      
    }, 

///Para después: estos son textos de ROLES para cuando haya que sacar la imagen y maquetar, la imagen está arriba
      // '<b>My role</b>',
      // 'UX Design',
      // 'UX Writing',

      // '<b>Tools</b>',
      // 'Figma',
      // 'Miro',

      // '<b>Timeline & Team</b>',
      // '1 month to design',
      // '1 UX Designer, 1 Product maganer, 3 devs',

      {
        type: 'title',
        text: 'User interviews & user journey',
        marginBottom: 0,
        marginTop: 50,
      },

      "We started interviewing a selected group of real estate experts to map the expert's User Journey.",
      'Until that point, there was no defined methodology for work. Each expert used different tools to do the same job, contacted clients through various channels, and there was no defined script for talking to potential clients nor any follow-up after the initial contact, among other issues.',
      'All interviews were conducted virtually with experts from Colombia, Ecuador, and Peru. While we gathered answers, many new questions also arose.',
      'The key discovery was that the proposal served as a property display. Clients would select properties they liked and schedule visits with the expert. Thus, the proposal needed a feature for scheduling appointments.',
      'Experts emphasized the importance of highlighting certain parts of the proposal, such as images and property prices, as clients often discard properties if the price isn’t right. Additionally, for new projects, the completion date was crucial to include in the proposal design.',

      {
        type: 'title',
        text: 'The design',
        marginBottom: 0,
        marginTop: 50,
      },

      "Since the commercial proposal was going to be part of Properati's ecosystem, we decided to maintain the brand style guide.",
      'The only thing we wanted to add to the design was illustrations, so we used an illustration bank and defined the aesthetics and tone for the rest of the company to ensure a unified approach regarding these elements.',

      {
        type: 'title',
        text: 'Hi-fi design',
        marginBottom: 30,
        marginTop: 40,
      },

      //Comment andy: La imagen the hifi-desktop.svg, que está abajo de este comment, tiene que tomar el 100% en DESKTOP
      // en mobile me parece que se ve como el culo, tenemos que verlo juntos seguramente tenga que ajustarla desde el diseño  
      {
        type: 'image',
        desktopSrc: '/properati/desktop/hifi-desktop.svg',
        desktopMode: 'full width',
        mobileSrc: '/properati/mobile/hi-fi-mobile.svg',
        mobileMode: 'full width',      
        marginBottom: 30,
        marginTop: 0,      
      }, 


//Comment andy: La imagen the the-results.svg, que está abajo de este comment, tiene que tomar el 100% en MOBILE
      {
        type: 'image',
        desktopSrc: '/properati/desktop/the-results-desktop-properati.svg',
        desktopMode: '100%',
        mobileSrc: '/properati/mobile/the-results.svg',
        mobileMode: 'customWidth',  
        customWidthMobile: '350px',        
        marginBottom: 0,
        marginTop: 40,      
      }, 


///Para después: estos son textos de RESULTS para cuando haya que sacar la imagen y maquetar, la imagen está arriba
      // {
      //   type: 'results',
      //   percentages: ['150%', '100%', '67%'],
      //   texts: [
      //     'increase in the number of scheduled appointments, highlighting the effectiveness of the redesign in facilitating easier and more frequent scheduling of property visits by clients.',
      //     'increase in the client response rate, demonstrating the effectiveness of the redesign in making proposals more responsive and appealing to clients.',
      //     'reduction in proposal creation time, allowing real estate experts to focus more on client interactions and closing deals.',
      //   ],
      //   marginBottom: 30,
      //   marginTop: 30,
      // },
    
     
      {
        type: 'title',
        text: 'Reflections',
        marginBottom: 0,
        marginTop: 50,
      },
      'The commercial proposal was created to solve a huge time and speed issue with customers that are in the search of a new home.',
      'We construct a design for a new product based on a research investigation focused on the experts and also on the clients.',
      'We also created a backlog with ideas that could not be included in this first iteration due to time constraints but will make the proposal much more efficient and attractive',
      'Additionally, we designed a small survey for sellers to give to their clients regarding the new commercial proposal, asking about things that do not work or features they would like to have. This will help us gather ideas to incorporate into future versions.',
    ],
  },
///TERMINA PROPERATI
/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
///EMPIEZA PROPPIT
  {
    id: 'proppit-case',

    details: [
      
      {
        type: 'title',
        text: 'About',
        marginBottom: 0,
        marginTop: 50,
      },
      'This research was carried out for Proppit, an online marketing platform to manage and publish estate mainly oriented to real estate professionals. Nowadays the web is online in Chile, Argentina, Perú, Colombia, Ecuador, Panamá, Philippines & Thailand.',

      {
        type: 'title',
        text: 'The problem',
        marginBottom: 0,
        marginTop: 50,
      },
      "Our UXR team of two was tasked with understanding why customers weren't renewing their subscriptions on Proppit and finding solutions to reduce churn from 9% to 5%.",
      'The target audience for this research was customers from Colombia who had churned within 90 days of activation.',
      'Working independently yet collaboratively across the company, we met with Proppit stakeholders to present and adjust our plan, which had a maximum duration of one month.',
      'The plan involved first analyzing existing customer data and then conducting phone interviews. The main challenges were recruiting customers for interviews without incentives and conducting the initial phase by phone.',

//Comment andy: La imagen the roles-in-project-mobile-proppit.svg, que está abajo de este comment, tiene que tomar el 100% en MOBILE
      {
        type: 'image',
        desktopSrc: '/proppit/desktop/roles-in-project-desktop-proppit.svg',
        desktopMode: '100%',
        mobileSrc: '/proppit/mobile/roles-in-project-mobile-proppit.png',
        mobileMode: 'customWidth',  
        customWidthMobile: '350px',      
        marginBottom: 50,
        marginTop: 40,      
      },       


//Para después: estos son textos de ROLES para cuando haya que sacar la imagen y maquetar, la imagen está arriba

      // '<b>My role</b>',
      // 'UX Design',
      // 'UX Research',

      // '<b>Tools</b>',
      // 'Figma',
      // 'Excel',

      // '<b>Timeline & Team</b>',
      // '3 weeks to do research',
      // '1 UX Designer, 1 UX Researcher',

   
      '<b>Steps with deadlines for each stage of the research discussed with stakeholders</b>',

      "We started interviewing a selected group of real estate experts to map the expert's User Journey.",
      'Until that point, there was no defined methodology for work. Each expert used different tools to do the same job, contacted clients through various channels, and there was no defined script for talking to potential clients nor any follow-up after the initial contact, among other issues.',
      'All interviews were conducted virtually with experts from Colombia, Ecuador, and Peru. While we gathered answers, many new questions also arose.',
      'The key discovery was that the proposal served as a property display. Clients would select properties they liked and schedule visits with the expert. Thus, the proposal needed a feature for scheduling appointments.',
      'Experts emphasized the importance of highlighting certain parts of the proposal, such as images and property prices, as clients often discard properties if the price isn’t right. Additionally, for new projects, the completion date was crucial to include in the proposal design.',


    
//Para después: estos son textos de STEPS para cuando haya que sacar la imagen y maquetar, la imagen está arriba
      // '<b>Step 1</b>',
      // '<b>Survey Interview Preparation</b>',
      // 'Analysis and cross customer data Churn',
      // 'Design interview script',
      // 'Interview script design Tel',
      // 'Recruitment 1',
      // 'Recruitment 2 (1st mail)',
      // 'Recruitment form',

      // '<b>Step 2</b>',
      // '<b>Recruitment & Interviews</b>',
      // 'Recruitment 3 (phone)',
      // 'Conducting interviews',
      // 'Preliminary synthesis insights interviews',
      // 'Qualitative feedback analysis',

      // '<b>Step 3</b>',
      // '<b>Interview results</b>',
      // 'Conducting interviews',
      // 'Final report interview results',

      // '<b>Step 4</b>',
      // '<b>Final results report</b>',
      // 'Analysis of activation and renewal flows (optional)',
      // 'Final report of research results',

//Comment andy: La imagen the steps-research-desktop.svg, que está abajo de este comment, tiene que tomar el 100% en DESKTOP
      {
        type: 'image',
        desktopSrc: '/proppit/desktop/steps-research-desktop.svg',
        desktopMode: '100%',
        mobileSrc: '/proppit/mobile/steps-research-mobile.svg',
        mobileMode: '100%',      
        marginBottom: 30,
        marginTop: 40,      
      },        


      'To develop this project we followed the lines of the <b>Double Diamond methodology</b> and as a team, we generated deliverables for the first two phases: for Discovery and in the Define phase.',
      
      {
        type: 'image',
        desktopSrc: '/proppit/desktop/double-diamond-desktop.svg',
        desktopMode: '100%',
        mobileSrc: '/proppit/mobile/doublediamond-mobile.jpg',
        mobileMode: '100%',      
        marginBottom: 30,
        marginTop: 40,      
      },        

      {
        type: 'title',
        text: 'Stage 1: Customer Information Analysis',
        marginBottom: 0,
        marginTop: 50,
      },      
     
      "In the first stage, we analyzed existing data from Proppit's customers to minimize the need for high investment. We requested access to customer complaint/request emails and NPS survey results.",
      'We <b>reviewed 137 emails</b> from an 8-month period and 500 NPS messages. The emails <b>revealed urgent issues and needs</b>, while the NPS responses highlighted customer grievances and suggestions.',
      'We compiled all the information into an Excel sheet, categorized it, and created quantitative graphs per topic.',

      {
        type: 'title',
        text: 'Stage 2: Interviewing Unsubscribed Users',
        marginBottom: 0,
        marginTop: 50,
      },
   
      'In the second stage, we <b>interviewed customers who did not renew their subscriptions to understand their pain points and reasons for churn</b>.',

      'We requested a list of customers who had been active for less than 90 days, were from Colombia, and had unsubscribed. Initially, we had no incentives, resulting in a low response rate and extended timeline. When incentives were later provided, we had already reached theoretical saturation and stopped interviewing.',

      'Interviews were conducted by phone, as per stakeholder request, but we recommended video calls for richer interaction. We called users first to set up video calls, defaulting to phone interviews if video calls were not feasible increase in the client response rate, demonstrating the effectiveness of the redesign in making proposals more responsive and appealing to clients.',
      
      '<b>To ensure effective follow-up, we prepared several tools</b>:',
      '1. User recruitment spreadsheet',
      '2. Recruitment email',
      '3. Calendly setup for scheduling',
      '4. Reminder messages via Whatsapp',

      'For detailed tools and scripts, you can view the documents by clicking here.',

//Esto es para maquetar, ahora pertenece a la imagen FINDINFS FROM DE RESEARCH QUE ESTA ABAJO DE ESTO
      // {
      //   type: 'title',
      //   text: 'Stage 2: Interviewing Unsubscribed Users',
      //   marginBottom: 0,
      //   marginTop: 50,
      // },
      
      // //'After completing stages 1 and 2, we prepared the final report, including: a General Report, the detailed interview report vith visual cards (5 cards form 14 interviews), qualitative feedback analysis report, excel sheet vith interviewed customers',

      // //'We noted that users often provided multiple reasons for churn, considering the first mentioned as the most significant. We created two graphs: one for main reasons and another combining main and secondary reasons.',

//Comment andy: La imagen the findings-from-research-mobile.svg, que está abajo de este comment, tiene que tomar el 100% en MOBILE
      
      {
        type: 'image',
        desktopSrc: '/proppit/desktop/findings-from-research-desktop.svg',
        desktopMode: '100%',
        mobileSrc: '/proppit/mobile/findings-from-the-research.png',
        mobileMode: 'customWidth',  
        customWidthMobile: '350px',     
        marginBottom: 50,
        marginTop: 40,      
      },        

     
      
//Comment andy: La imagen the key-findings-mobile.svg, que está abajo de este comment, tiene que tomar el 100% en MOBILE
      
        {
          type: 'image',
          desktopSrc: '/proppit/desktop/key-findings-desktop.svg',
          desktopMode: '100%',
          mobileSrc: '/proppit/mobile/key-findings-mobile.png',
          mobileMode: 'customWidth',  
          customWidthMobile: '350px',     
          marginBottom: 30,
          marginTop: 0,      
        },      


//Comment andy: La imagen the summary-conclusion-mobile.svg, que está abajo de este comment, tiene que tomar el 100% en MOBILE

      {
        type: 'image',
        desktopSrc: '/proppit/desktop/summary-conclusion-desktop.svg',
        desktopMode: '100%',
        mobileSrc: '/proppit/mobile/summary-conclusion-mobile.png',
        mobileMode: 'customWidth',  
        customWidthMobile: '350px',        
        marginBottom: 30,
        marginTop: 10,      
      },      

     

//KEY-FINDINGS  / SUMMARY AND CONCLUSION- para lo quieras maquetar aca esta la info (falta acomodarla, me queda a mi)
      // {
      //   type: 'results',
      //   percentages: ['50%', '15.3%', '11.5%','11.5%','7.6%', '7.6%'],
      //   texts: [
      //     'of users cited the lack of leads or poor lead conversion as the main reason for churn.',
      //     'of the users went to or used stronger competitors (Finca Raíz).',
      //     'felt they wasted their money.',        
      //     'mentioned mistreatment in customer service.',
      //     'was the cost and/or lack of smaller plans suitable for small real estate agencies.',
      //     'of the users had initial account activation problems.',
          
      //   ],
      //   marginBottom: 30,
      //   marginTop: 30,
      // },  

      // 'These reasons were consistent with issues mentioned in customer emails and NPS survey responses analyzed in stage 1.',

      // '<b>Summary and Conclusion',

      // 'The research identified clear user pain points, leading to concrete improvement solutions that could solve the churn problem:',
      // '1.Offer smaller plans for small clients',
      // '2.Improve the payment/renewal process by adding features for users to self-manage invoices and report payments',
      // '3.Enhance initial account activation with an automatic system for new customers',
      // '4.Provide training through webinars or a YouTube channel to help customers better utilize the platform',

      // 'Our research team provided these insights to the product team for implementation.',

      // 'The presented data serves as a baseline to measure the impact of future improvements.',

      // 'A few months after completing this research, the research team and other employees in Argentina were laid off, leaving no information on the implemented improvements.',

 
    ],
  },
];
