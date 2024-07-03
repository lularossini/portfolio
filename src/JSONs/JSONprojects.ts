

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
    id: 'caso1',
    name: 'caso1',
    period: '2020 - 2022',
    role: 'Desarrollador Front-End & Co-founder',
    details: [
      'texto comun',
      {
        type: 'image',
        src: '/images/plumarii/logo_plumarii.png',
        width: '100%',
        marginBottom: 30,
        marginTop: 30,
        imageDescription: '',
      },
    ]
  },

 
  {
    id: 'plumarii',
    name: 'Plumarii',
    period: '2020 - 2022',
    role: 'Desarrollador Front-End & Co-founder',
    details: [
      '<b>2020',
      '<b>Comienzos',
      'Junto con mi socia de Lonely (un proyecto de indumentaria en Argentina de 2016 a 2022), pensamos en la posibilidad de hacer un emprendimiento de indumentaria en un mercado más sólido que el argentino.',
      {
        type: 'image',
        src: '/images/plumarii/logo_plumarii.png',
        width: '100%',
        marginBottom: 30,
        marginTop: 30,
        imageDescription: '',
      },

      'Por el tamaño del mercado, los tipos de sociedades disponibles que permiten la apertura simple y a distancia, y por las características de la logística (tecnologizada, integrada a nivel nacional y económica), elegimos Estados Unidos.',

      'En esta etapa generamos un plan sobre cómo, por etapas, íbamos a validar y desarrollar cada instancia hasta el lanzamiento, sin descuidar nuestro emprendimiento local.',
      {
        type: 'image',
        src: '/images/plumarii/plumariiLabel.jpg',
        width: '100%',
        marginBottom: 30,
        marginTop: 50,
        imageDescription: 'Etiqueta de Plumarii',
      },
      'Nuestra idea inicial como producto principal de nuestra futura cartera de productos fue fabricar camisetas bordadas con diseños muy bien trabajados. A pesar de los tiempos particulares debido a la pandemia, pudimos avanzar mucho más de lo que esperábamos.',
      '<b>Diseño y fabricación del stock inicial',
      'A partir de la red de proveedores de Lonely (un proyecto de indumentaria en Argentina de 2016 a 2022), logramos encontrar los proveedores correctos para la fabricación de camisetas y su posterior bordado.',
      {
        type: 'image',
        src: '/images/plumarii/embroideryProccess.jpg',
        width: '100%',
        marginBottom: 30,
        marginTop: 50,
        imageDescription: 'Proceso de bordado',
      },
      'Ese año conseguimos fabricar un stock inicial de 22 modelos de camisetas bordadas. Cada diseño fue muy trabajado por que quisimos diferenciarnos de cualquier propuesta que pudiese parecer acartonada.',
      'Quisimos trabajar un posicionamiento moderno y sustentable. Diseñamos un hermoso empaque completamente biodegradable y fabricado a partir del maiz.',

      {
        type: 'video',
        src: '/videos/plumarii/plumariiPackages.mp4',
        height: '650px',
        marginBottom: 40,
        marginTop: 50,
        imageDescription: 'Packaging biodegradable a base de maiz',
        widthImageDescription: '300px',
      },
      '<b>2021',
      '<b>Contenido',
      'Con las restricciones para la circulación y la actividad impuestas por la pandemia más liberadas, nos propusimos generar contenido que alimentara nuestras futuras redes y tienda. Hicimos cuatro sesiones de fotos (estudio, exteriores y dos pisos diferentes).',
      {
        type: 'image',
        src: '/images/plumarii/gridContent.jpg',
        width: '100%',
        marginBottom: 20,
        marginTop: 50,
        imageDescription: 'Grilla outfits Plumarii',
      },

      {
        type: 'video',
        src: '/videos/plumarii/content.mp4',
        height: '650px',
        marginBottom: 20,
        marginTop: 50,
        imageDescription: 'Reel Plumarii',
        widthImageDescription: '300px',
      },

      '<b>Redes Sociales',
      'Ya con contenido y decisiones sobre la imagen de marca, empezamos a armar el Instagram.',
      {
        type: 'link',
        href: 'https://www.instagram.com/plumariiok/',
        text: 'Link al instagram de Plumarii',
        marginBottom: 0,
        marginTop: 40,
      },
      {
        type: 'image',
        src: '/images/plumarii/instagram.jpg',
        mobileVersionSrc: '/images/plumarii/instagramMobile.jpg',
        width: '100%',
        marginBottom: 10,
        marginTop: 10,
        imageDescription: 'Instagram de Plumarii',
      },
      '<b>Depósito automatizado',
      'Como condición previa para que nuestro emprendimiento fuera factible, necesitábamos un depósito automatizado que despachara paquetes a precios competitivos a todo el país. Mediante un plugin, integramos su sistema con nuestra tienda online.',
      'Con configuraciones previas, cada vez que se realizara una venta, el depósito despacharía de forma automática la venta en un máximo de veinticuatro horas sin requerir autorización adicional por cada venta.',
      {
        type: 'image',
        src: '/images/plumarii/fulfillmentServices.png',
        width: '100%',
        marginBottom: 10,
        marginTop: 50,
        imageDescription: 'Empresas de logística automatizada',
        widthImageDescription: '100%',
      },
      '<b>Viaje',

      'En septiembre de 2021 realizamos un viaje de veinte días a Miami. En ese viaje, pudimos visitar el depósito, abrir cuentas bancarias corporativas, solucionar temas de la estructura jurídica y conseguir proveedores de hoodies, camisetas, leggings, beanies, medias, y también servicios de bordado, customización de prendas y etiquetas.',
      {
        type: 'image',
        src: '/images/plumarii/travelByMiami.jpg',
        width: '100%',
        marginBottom: 10,
        marginTop: 50,
        imageDescription: 'Viaje lleno de aprendizaje y multiples compromisos',
      },
      '<b>Tienda',
      'Luego de regresar del viaje, abrimos una tienda en Shopify. Nuestra empresa, siendo nosotros socios extranjeros, estaba imposibilitada de tener varios medios de pago americanos. La elección de Shopify fue porque ofrecían los principales medios de pago americanos integrados y la posibilidad de agregar el plugin necesario para la integración con el depósito.',
      'Shopify tiene sus propios templates, los cuales usamos. El problema es que ninguno nos servía realmente por completo. Por eso customicé muchísimo nuestra tienda con HTML, CSS y JavaScript, incluyendo diseño de checkout, botones, hovers, distancias no estéticas en los templates, tamaños de fuentes y muchas cosas más.',
      {
        type: 'image',
        src: '/images/plumarii/ecommerce1.jpg',
        width: '300px',
        marginBottom: 30,
        marginTop: 50,
        imageDescription: 'Tienda Plumarii 1',
      },
      {
        type: 'image',
        src: '/images/plumarii/ecommerce2.jpg',
        width: '300px',
        marginBottom: 30,
        marginTop: 40,
        imageDescription: 'Tienda Plumarii 2',
      },
      {
        type: 'image',
        src: '/images/plumarii/ecommerce3.jpg',
        width: '300px',
        marginBottom: 30,
        marginTop: 40,
        imageDescription: 'Tienda Plumarii 3',
      },
      '<b>2022',
      '<b>Marketing digital',
      'A partir del dos de enero de 2022, comenzamos a hacer pruebas de marketing digital. Utilizando Business Manager de Facebook, realizamos publicidades en la red Instagram. Probamos todo tipo de contenido, como fotos y videos de modelos posando con nuestra ropa de diversas formas.',
      {
        type: 'image',
        src: '/images/plumarii/vibeAd.jpg',
        width: '365px',
        marginBottom: 20,
        marginTop: 50,
        imageDescription: 'Facebook ads',
      },
      {
        type: 'video',
        src: '/videos/plumarii/camiAd.mp4',
        height: '650px',
        marginBottom: 40,
        marginTop: 40,
        imageDescription: 'Reel Plumarii',
        widthImageDescription: '300px',
      },

      'Uno de nuestros logros fue haber encontrado un tipo de contenido cuyo resultado medido en métricas de la publicidad nos hizo alcanzar los estándares de precio por clic, CTR y costo de adquisición promedio en Estados Unidos.',
      'El mercado americano es súper competitivo, por lo que es muy complicado estar a la altura. Nosotros lo logramos y, a nivel profesional, fue uno de nuestros mayores logros. También probamos colaboraciones con influencers americanas, enviándoles productos nuestros a cambio de posteos o stories.',
      '<b>Cierre',
      'A pesar de haber logrado un costo por adquisición al nivel del mercado, necesitábamos refinar aún más la propuesta y el marketing digital. Para que el negocio hubiese llegado a buen puerto, necesitábamos un año más y financiación.',
      'Necesitábamos incrementar el valor del carrito promedio y bajar el costo de adquisición pagado en publicidad. A esto se sumó que mi socia de Lonely y este proyecto decidió en ese momento que en los próximos meses se mudaría a Barcelona, por lo que decidimos dejar el proyecto en ese punto.',
    ],
  },
 
];

