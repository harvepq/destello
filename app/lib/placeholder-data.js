const products =[
  {
    id: 'destello001',
    slug: 'choquequirao',
    name: 'Choquequirao',
    title: 'Chquequirao 4D / 3N',
    description: "Explora la 'hermana sagrada' de Machu Picchu, donde la impresionante arquitectura y la atmósfera misteriosa te cautivarán. Únete a esta expedición única hacia un sitio arqueológico en constante descubrimiento y déjate maravillar por la majestuosidad de Choquequirao.",
    images: ['product1.jpeg', 'product1.jpeg', 'product1.jpeg', 'product1.jpeg', 'product1.jpeg'],
    prices: {dollars: 0, soles: 0},
    people: 2,
    items: [
      {
        id: 'item1',
        title: 'Aventura en privado',
        description: 'El tour se lleva de manera privada y exclusiva',
        icon: 'people'
      },
      {
        id: 'item2',
        title: 'Duracion',
        description: '4 Dias - 3 Noches',
        icon: 'clock'
      },
      {
        id: 'item3',
        title: 'Tipo de tour',
        description: 'Cultural y aventura',
        icon: 'person-walking'
      },
      {
        id: 'item4',
        title: 'Dificultad',
        description: 'Facil',
        icon: 'alert'
      }
    ],
    itinerary : [
      {
        id: 'day_001',
        name: 'Dia 1',
        activities: [
          {id: 'activity_01_001', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
          {id: 'activity_01_002', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
          {id: 'activity_01_003', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
          {id: 'activity_01_004', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
        ]
      },
      {
        id: 'day_002',
        name: 'Dia 2',
        activities: [
          {id: 'activity_02_001', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
          {id: 'activity_02_002', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
          {id: 'activity_02_003', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
          {id: 'activity_02_004', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
        ]
      }
    ]

  },
  {
    id: 'destello002',
    slug: 'salkantay',
    name: 'Salkantay',
    title: 'Salkantay 4D / 3N',
    description: " El trekking de Salkantay te sumerge en una experiencia incomparable. Desde exuberantes bosques tropicales hasta majestuosas cumbres nevadas, cada paso te lleva a través de paisajes sorprendentes. Prepárate para una aventura inolvidable que te dejará maravillado por la diversidad de la naturaleza.",
    images: ['product1.jpeg', 'product1.jpeg', 'product1.jpeg', 'product1.jpeg', 'product1.jpeg'],
    prices: {dollars: 400, soles: 1200},
    people: 4,
    items: [
      {
        id: 'item1',
        title: 'Aventura en privado y compartido',
        description: 'El tour se lleva de manera compartida con otros turistas que buscan lo mismo',
        icon: 'people'
      },
      {
        id: 'item2',
        title: 'Duracion',
        description: '4 Dias - 3 Noches | 5 Dias - 4 Noches',
        icon: 'clock'
      },
      {
        id: 'item3',
        title: 'Tipo de tour',
        description: 'Aventura',
        icon: 'person-walking'
      },
      {
        id: 'item4',
        title: 'Dificultad',
        description: 'Medio',
        icon: 'alert'
      }
    ],
    itinerary : [
      {
        id: 'day_001',
        name: 'Dia 1',
        activities: [
          {id: 'activity_01_001', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
          {id: 'activity_01_002', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
          {id: 'activity_01_003', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
          {id: 'activity_01_004', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
        ]
      },
      {
        id: 'day_002',
        name: 'Dia 2',
        activities: [
          {id: 'activity_02_001', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
          {id: 'activity_02_002', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
          {id: 'activity_02_003', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
          {id: 'activity_02_004', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
        ]
      }
    ]

  },
  {
    id: 'destello003',
    slug: 'valle-encantado-full-day',
    name: 'Valle Encantado FD',
    title: 'Valle Encantado FD',
    description: "Embárcate en el tour del Valle Encantado, una experiencia que te conectará con la serenidad y la belleza natural. Durante la caminata, serás testigo de una laguna impresionante que alberga más de 100 especies, así como paisajes espectaculares y monumentos culturales. Descubre el famoso bosque de eucaliptos del Cusco, pasa por lugares emblemáticos como Qenqo y el Templo de la Luna, y naliza en el pintoresco barrio tradicional de San Blas, Toqocachi. Sumérgete en la tranquilidad y la magia del Valle Encantado mientras te conectas con la esencia misma de la naturaleza.",
    images: ['product1.jpeg', 'product1.jpeg', 'product1.jpeg', 'product1.jpeg', 'product1.jpeg'],
    prices: {dollars: 380, soles: 700},
    people: 2,
    items: [
      {
        id: 'item1',
        title: 'Aventura en privado',
        description: 'El tour se lleva de manera privada y exclusiva',
        icon: 'people'
      },
      {
        id: 'item2',
        title: 'Duracion',
        description: 'Full Day',
        icon: 'clock'
      },
      {
        id: 'item3',
        title: 'Tipo de tour',
        description: 'Cultural y aventura',
        icon: 'person-walking'
      },
      {
        id: 'item4',
        title: 'Dificultad',
        description: 'Facil',
        icon: 'alert'
      }
    ],
    itinerary : [
      {
        id: 'day_001',
        name: 'Dia 1',
        activities: [
          {id: 'activity_01_001', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
          {id: 'activity_01_002', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
          {id: 'activity_01_003', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
          {id: 'activity_01_004', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
        ]
      },
      {
        id: 'day_002',
        name: 'Dia 2',
        activities: [
          {id: 'activity_02_001', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
          {id: 'activity_02_002', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
          {id: 'activity_02_003', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
          {id: 'activity_02_004', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
        ]
      }
    ]

  },
  {
    id: 'destello004',
    slug: 'huchuy-qosqo-full-day',
    name: 'Huchuy Qosqo FD',
    title: 'Huchuy Qosqo FD',
    description: "Sumérgete en la maravilla arqueológica de Huchuy Qosqo en una jornada repleta de aventura y belleza natural. Inicia tu emocionante caminata en el encantador pueblo de Tambomachay, explorando las montañas hasta alcanzar el impresionante paso de Pucajasa. En el trayecto, serás testigo de dos hermosas lagunas y serás recibido por las apachetas, símbolos de veneración a los apus, donde muchos viajeros piden sus deseos. Descubre las impresionantes construcciones de adobe y piedra de HuchuyQosqoantes deconcluir tu travesía en el acogedor pueblo de Umasbamba,Chinchero, cercano a la serena laguna Piuray. Prepárate para una experiencia que te dejará maravillado y te conectará con la historia y la majestuosidad de los Andes.",
    images: ['product1.jpeg', 'product1.jpeg', 'product1.jpeg', 'product1.jpeg', 'product1.jpeg'],
    prices: {dollars: 380, soles: 700},
    people: 2,
    items: [
      {
        id: 'item1',
        title: 'Aventura en privado',
        description: 'El tour se lleva de manera privada y exclusiva',
        icon: 'people'
      },
      {
        id: 'item2',
        title: 'Duracion',
        description: 'Full Day',
        icon: 'clock'
      },
      {
        id: 'item3',
        title: 'Tipo de tour',
        description: 'Cultural y aventura',
        icon: 'person-walking'
      },
      {
        id: 'item4',
        title: 'Dificultad',
        description: 'Facil',
        icon: 'alert'
      }
    ],
    itinerary : [
      {
        id: 'day_001',
        name: 'Dia 1',
        activities: [
          {id: 'activity_01_001', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
          {id: 'activity_01_002', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
          {id: 'activity_01_003', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
          {id: 'activity_01_004', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
        ]
      },
      {
        id: 'day_002',
        name: 'Dia 2',
        activities: [
          {id: 'activity_02_001', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
          {id: 'activity_02_002', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
          {id: 'activity_02_003', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
          {id: 'activity_02_004', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
        ]
      }
    ]

  },
  {
    id: 'destello005',
    slug: 'sendero-chinchero-urquillos-full-day',
    name: 'Sendero Chinchero-Urquillos FD',
    title: 'Sendero Chinchero-Urquillos FD',
    description: "Unaexperiencia de día completo que comienza en el encantador pueblo de Chinchero, uno de los más pintorescos de Cusco, con su impresionante sitio arqueológico inca coronado por una iglesia colonial. Desciende a pie por un antiguo camino inca, disfrutando de las magní cas vistas de los nevados Chicón y Pitusiray a lo lejos. En tu ruta, toma un desvío corto para maravillarte con la cautivadora catarata Poc Poc, un lugar perfecto para refrescarte y relajarte. A medida que te acercas a Urquillos, observarás cómo el paisaje se transforma en exuberantes campos de cultivo, repletos de una variada ora y fauna.",
    images: ['product1.jpeg', 'product1.jpeg', 'product1.jpeg', 'product1.jpeg', 'product1.jpeg'],
    prices: {dollars: 380, soles: 700},
    people: 2,
    items: [
      {
        id: 'item1',
        title: 'Aventura en privado',
        description: 'El tour se lleva de manera privada y exclusiva',
        icon: 'people'
      },
      {
        id: 'item2',
        title: 'Duracion',
        description: 'Full Day',
        icon: 'clock'
      },
      {
        id: 'item3',
        title: 'Tipo de tour',
        description: 'Cultural y aventura',
        icon: 'person-walking'
      },
      {
        id: 'item4',
        title: 'Dificultad',
        description: 'Facil',
        icon: 'alert'
      }
    ],
    itinerary : [
      {
        id: 'day_001',
        name: 'Dia 1',
        activities: [
          {id: 'activity_01_001', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
          {id: 'activity_01_002', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
          {id: 'activity_01_003', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
          {id: 'activity_01_004', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
        ]
      },
      {
        id: 'day_002',
        name: 'Dia 2',
        activities: [
          {id: 'activity_02_001', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
          {id: 'activity_02_002', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
          {id: 'activity_02_003', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
          {id: 'activity_02_004', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
        ]
      }
    ]
  },
]

const blogs = [
  {
    id: 'blog001',
    slug: 'viaja-suena-vive',
    name: 'Convierte tu viaje en un simbolo de identidad de tu cliente',
    slogan: 'viaja suena y vive',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'aventura',
    extract: 'En una mercado saturado, donde la calidad de todo producto o servicio es bastante parecida, diferenciarse de tu competencia puede ser un reto.  Uno tiende a pensar que para diferenciase tiene que ser el mejor en el mercado, sin embargo, competir intentando ser el mejor es entrar en una carrera muy competitiva, larga y costosa donde solo gana uno. Y aunque ser el mejor puede ayudarte',
    description: ['En una mercado saturado, donde la calidad de todo producto o servicio es bastante parecida, diferenciarse de tu competencia puede ser un reto.  Uno tiende a pensar que para diferenciase tiene que ser el mejor en el mercado, sin embargo, competir intentando ser el mejor es entrar en una carrera muy competitiva, larga y costosa donde solo gana uno. Y aunque ser el mejor puede ayudarte'],
    location: 'Madre de Dios'
  },
  {
    id: 'blog002',
    slug: 'se-un-destello-andino',
    name: 'Se un destello andino',
    slogan: 'se un destello andino',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'cultural',
    extract: 'En una mercado saturado, donde la calidad de todo producto o servicio es bastante parecida, diferenciarse de tu competencia puede ser un reto.  Uno tiende a pensar que para diferenciase tiene que ser el mejor en el mercado, sin embargo, competir intentando ser el mejor es entrar en una carrera muy competitiva, larga y costosa donde solo gana uno. Y aunque ser el mejor puede ayudarte',
    description: ['...'],
    location: 'Sicuani - Cusco'
  },
]

const reasons = [
  {
    id: 'reason001',
    title: 'Seguridad en tus compras',
    description: 'Aenean ut nulla at purus facilisis rhoncus a a tellus. Quisque pellentesque consequat ex in congue. Nulla eu tincidunt erat. Curabitur sit amet magna lectus. Etiam quis convallis risus.',
    icon: '/icons/lock.svg'
  },
  {
    id: 'reason002',
    title: 'Atencion las 24 Horas',
    description: 'Aenean ut nulla at purus facilisis rhoncus a a tellus. Quisque pellentesque consequat ex in congue. Nulla eu tincidunt erat. Curabitur sit amet magna lectus. Etiam quis convallis risus.',
    icon: '/icons/lock.svg'
  },
  {
    id: 'reason003',
    title: 'Calidad de Viaje',
    description: 'Aenean ut nulla at purus facilisis rhoncus a a tellus. Quisque pellentesque consequat ex in congue. Nulla eu tincidunt erat. Curabitur sit amet magna lectus. Etiam quis convallis risus.',
    icon: '/icons/lock.svg'
  }
]

const about = {
  we_are: {
    title: '¿Quiénes Somos?',
    description: 'Somos tu agencia de viajes segura, responsable y de confianza. Nos dedicamos a organizar y planificar tus viajes, brindándote la tranquilidad de saber que estás en buenas manos. Nuestro compromiso es liberarte del estrés de la planificación, asegurándonos de que cada detalle esté cuidadosamente gestionado para que puedas disfrutar de una experiencia sin preocupaciones y llena de momentos inolvidables.'
  },
  we_do: {
    title: '¿Qué Hacemos?',
    description: 'Lo que hacemos va más allá de la simple planificación de viajes; nos esforzamos por crear experiencias que inspiren, emocionen y enriquezcan la vida de nuestros clientes. Nos comprometemos a entender sus necesidades y deseos individuales para diseñar viajes que superen sus expectativas y les permitan sumergirse completamente en la magia de Perú.'
  },
  engagement: {
    title: 'Nuestro Compromiso',
    description: 'Nuestro objetivo en Destello Andino es proporcionar experiencias de viaje excepcionales y seguras a nuestros clientes, cumpliendo así nuestra misión de crear recuerdos inolvidables durante su estadía en su destino. Para lograr esto, nos comprometemos a:',
    first: 'Ofrecer un servicio al cliente de primera clase, personalizado y adaptable a las necesidades individuales de cada viajero.',
    second: 'Garantizar la seguridad y el bienestar de nuestros clientes en cada aspecto de su viaje, desde la planificación hasta el regreso a casa.',
    third: 'Fomentar relaciones sólidas con nuestros clientes, basadas en la confianza, la transparencia y la satisfacción del cliente.',
    fourth: 'Mantener un enfoque de mejora continua en la calidad y la reducción del margen de error en nuestros servicios, mediante la evaluación constante y el ajuste de nuestros procesos.',
    extract: 'Al adherirnos a estos principios y estrategias, nos esforzamos por cumplir nuestra misión de brindar experiencias de viaje inolvidables y convertirnos en el referente líder en viajes por los países andinos'
  },
  mission: {
    title: 'Nuestra Misión',
    description: 'En Destello Andino Travel nos dedicamos a convertir tu sueño de viajar en realidad. Somos expertos en crear experiencias inolvidables, desde la planificación detallada hasta la ejecución perfecta. Nuestra misión es liberarte del estrés de la planificación para que puedas sumergirte en la aventura y la emoción. Queremos que cada viaje sea una historia que contar, llena de momentos que te roben el aliento y recuerdos que duren toda la vida.'
  },
  vision: {
    title: 'Nuestra Visión',
    description: 'Ser el agente de viaje líder en los países andinos, ofreciendo  experiencias únicas y personalizadas que permitan a los viajeros descubrir la diversidad cultural, la riqueza natural y la aventura de los destinos andinos en su totalidad. Desde los picos nevados de Colombia, hasta las tierras bajas de Argentina y Chile, aspiramos a ser el punto de referencia para aquellos que buscan explorar toda la región andina.'
  }
}

module.exports = {
  products,
  blogs,
  reasons,
  about
}