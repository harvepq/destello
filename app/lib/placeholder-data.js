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
    slug: 'caminata-a-la-montana-siete-colores',
    name: 'Descubriendo la Magia de la Caminata a la Montaña de Siete Colores',
    slogan: 'Caminata a la montaña siete colores',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'aventura',
    extract: 'Si estás buscando una aventura única en el corazón de los Andes peruanos, la caminata a la Montaña de Siete Colores es una experiencia que no te puedes perder. También conocida como Vinicunca o Montaña Arcoíris, esta maravilla natural se ha convertido en uno de los destinos más populares en el Cusco, ofreciendo a los viajeros una experiencia inolvidable en medio de paisajes impresionantes y colores vibrantes. Explorar este espectáculo natural te hará sentir una completa libertad mientras te adentras en la belleza única de los Andes peruanos.',
    description: ['Si estás buscando una aventura única en el corazón de los Andes peruanos, la caminata a la Montaña de Siete Colores es una experiencia que no te puedes perder. También conocida como Vinicunca o Montaña Arcoíris, esta maravilla natural se ha convertido en uno de los destinos más populares en el Cusco, ofreciendo a los viajeros una experiencia inolvidable en medio de paisajes impresionantes y colores vibrantes. Explorar este espectáculo natural te hará sentir una completa libertad mientras te adentras en la belleza única de los Andes peruanos.',
    'Antes de emprender esta emocionante aventura, es importante estar preparado física y mentalmente. Ya que la caminata a la Montaña de Siete Colores es desafiante, por lo que es fundamental tomarse el tiempo necesario para aclimatarse adecuadamente en Cusco antes de iniciar la expedición. Además, asegúrate de llevar contigo ropa abrigada, protector solar, agua, y snacks energéticos para mantenerte hidratado y alimentado durante el recorrido.',
    'El punto de partida de la caminata se encuentra en el pueblo de Pitumarca, ubicado a aproximadamente 3 horas en auto desde la ciudad de Cusco. Desde allí, se inicia una caminata de aproximadamente 6 kilómetros a través de paisajes impresionantes, incluyendo valles, quebradas y pastizales de alta montaña. Durante el camino, tendrás la oportunidad de interactuar con las comunidades locales, quienes te recibirán con calidez y hospitalidad, y podrás aprender sobre su estilo de vida y tradiciones.',
    'Después de unas horas de caminata, finalmente llegarás al punto más alto de la ruta, donde serás recibido por el espectacular paisaje de la Montaña de Siete Colores. Desde este mirador natural, tendrás la oportunidad de contemplar la impresionante gama de colores que adornan la montaña, creados por la presencia de minerales en el suelo que han teñido las capas geológicas a lo largo de millones de años. Este momento mágico es perfecto para tomar fotografías y disfrutar de la tranquilidad y la belleza del entorno. ¡Prepárate para vivir una experiencia única e inolvidable en la Montaña de Siete Colores!'
    ],
    location: 'Cusco'
  },
  {
    id: 'blog002',
    slug: 'descubre-la-espiritualidad-del-cusco',
    name: 'Descubre la Espiritualidad del Cusco: Lugares Sagrados que Debes Visitar',
    slogan: 'Descubre la espiritualidad del Cusco',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'cultural',
    extract: 'El Cusco, conocido como el ombligo del mundo en la cosmovisión andina, alberga una riqueza de sitios sagrados que reflejan la profunda espiritualidad de la cultura inca y preincaica. Desde templos impresionantes hasta montañas sagradas, aquí te presentamos algunos de los lugares más importantes que no puedes dejar de visitar durante tu viaje al Cusco.',
    description: ['El Cusco, conocido como el ombligo del mundo en la cosmovisión andina, alberga una riqueza de sitios sagrados que reflejan la profunda espiritualidad de la cultura inca y preincaica. Desde templos impresionantes hasta montañas sagradas, aquí te presentamos algunos de los lugares más importantes que no puedes dejar de visitar durante tu viaje al Cusco.',
    'Templo de Qorikancha (Templo del Sol)',
    'Ubicado en el corazón de la ciudad de Cusco, el Templo de Qorikancha es uno de los sitios sagrados más importantes del imperio incaico. Construido para rendir homenaje al dios Sol, Inti, este templo estaba ricamente decorado con oro y piedras preciosas. Aunque gran parte de su estructura fue destruida durante la conquista española, aún se pueden apreciar los impresionantes cimientos incas que sirven como testimonio de su grandeza pasada.',
    'Sacsayhuamán',
    'Perché en lo alto de una colina que domina la ciudad de Cusco, Sacsayhuamán es una impresionante fortaleza inca que sirvió como lugar ceremonial y defensivo. Sus enormes bloques de piedra, algunos de los cuales pesan más de 100 toneladas, están dispuestos de manera impecable, creando una estructura monumental que deja perplejos a los visitantes. Este lugar sagrado también es famoso por ser el escenario de la celebración del Inti Raymi, la fiesta del sol.',
    'Machu Picchu',
    'Sin duda, uno de los lugares más icónicos y sagrados del Cusco es Machu Picchu. Esta antigua ciudadela inca, ubicada en lo alto de los Andes, es famosa por su impresionante arquitectura y su enigmática ubicación. Para los incas, Machu Picchu era un lugar sagrado dedicado al culto religioso y a la observación astronómica. Hoy en día, es un destino turístico de renombre mundial que atrae a viajeros de todo el mundo en busca de aventura y espiritualidad.',
    'Valle Sagrado de los Incas',
    'El Valle Sagrado, ubicado entre Cusco y Machu Picchu, alberga una serie de sitios arqueológicos y pueblos tradicionales que eran sagrados para los incas. Entre los lugares más destacados se encuentran Pisac, famoso por su complejo arqueológico y su mercado artesanal, y Ollantaytambo, un antiguo pueblo inca con impresionantes terrazas agrícolas y un complejo arqueológico bien conservado.',
    'Apus (Montañas Sagradas)',
    'Para los incas, las montañas eran sagradas y estaban habitadas por espíritus protectores conocidos como Apus. Algunas de las montañas más sagradas del Cusco incluyen Ausangate, Salkantay y Huayna Picchu. Escalar estas montañas no solo ofrece vistas impresionantes, sino también la oportunidad de conectarse con la espiritualidad andina y rendir homenaje a los antiguos dioses incas.',
    'Explorar estos lugares sagrados te permitirá sumergirte en la profunda espiritualidad y el legado cultural del Cusco. Desde templos antiguos hasta montañas majestuosas, cada sitio ofrece una ventana a la rica historia y cosmovisión de la civilización inca. ¡No te pierdas la oportunidad de explorar estos lugares mágicos durante tu viaje al Cusco!'
    ],
    location: 'Cusco'
  },
  {
    id: 'blog003',
    slug: 'creencias-y-mitos-de-la-cultura-andina',
    name: 'Descubre la Riqueza de las Creencias y Mitos de la Cultura Andina',
    slogan: 'Creencias y mitos de la cultura andina',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'cultural',
    extract: 'La cultura andina es rica en mitos y creencias que reflejan la profunda conexión de sus pueblos con la naturaleza, los elementos y los dioses. Estas historias transmitidas de generación en generación nos ofrecen una ventana a la cosmovisión andina y nos permiten comprender mejor su forma de vida y su relación con el mundo que los rodea.',
    description: ['La cultura andina es rica en mitos y creencias que reflejan la profunda conexión de sus pueblos con la naturaleza, los elementos y los dioses. Estas historias transmitidas de generación en generación nos ofrecen una ventana a la cosmovisión andina y nos permiten comprender mejor su forma de vida y su relación con el mundo que los rodea. Algunos de estos mitos son los siguientes:',
    'El Origen de los Incas: Manco Cápac y Mama Ocllo',
    'Según la leyenda, Manco Cápac y Mama Ocllo fueron los primeros incas, enviados por el dios Sol, Inti, para fundar el imperio incaico en el valle del Cusco. Se dice que emergieron del lago Titicaca con una vara de oro, y que donde esta vara se hundiera en la tierra, deberían establecer su capital. Esta historia simboliza el origen divino de los incas y su conexión con los elementos naturales.',
    'El Culto a la Pachamama',
    'La Pachamama, o Madre Tierra, es una deidad venerada en toda la región andina, y sobre todo en la región del Cusco. Se cree que es la fuente de la vida y la fertilidad, y que protege a los agricultores y a sus cosechas. Los andinos realizan ceremonias y rituales en su honor, ofreciéndole hojas de coca, chicha y otros alimentos como muestra de agradecimiento y respeto por su generosidad.',
    'Los Apus: Espíritus de las Montañas',
    'Para los andinos, las montañas son consideradas sagradas y están habitadas por espíritus protectores conocidos como Apus. Estos espíritus son venerados y respetados, y se les ofrecen ofrendas como muestra de gratitud y veneración. Se cree que los Apus protegen a las comunidades locales y les brindan prosperidad y bienestar.',
    'El Chullachaqui: Espíritu del Bosque',
    'El Chullachaqui es un ser mitológico que habita en los bosques y protege la naturaleza. Se le describe como un ser pequeño y travieso, capaz de cambiar de forma para confundir a los viajeros desprevenidos. Los andinos respetan al Chullachaqui y evitan molestarlo para no sufrir sus travesuras.',
    'La Leyenda de los Inkarríes',
    'Según la mitología andina, los Inkarríes son los descendientes de los incas que retornarán algún día para restaurar el antiguo imperio incaico y traer la prosperidad a la región. Esta creencia refleja la esperanza y la resistencia del pueblo andino frente a la adversidad y los desafíos del presente. Explorar estas creencias y mitos nos permite sumergirnos en la rica y fascinante cultura andina del Cusco, descubriendo su profunda conexión con la naturaleza y su visión única del mundo. Durante tu viaje al Perú, ve Cusco, no pierdas la oportunidad de conocer más sobre estas historias ancestrales que siguen vivas en el corazón y la mente del pueblo andino.',
    ],
    location: 'Cusco'
  },
  {
    id: 'blog004',
    slug: 'festividades-mas-vibrantes-del-cusco',
    name: 'Explora las Festividades más Vibrantes del Cusco',
    slogan: 'Festividades más vibrantes del Cusco',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'cultural',
    extract: 'El Cusco, conocido como el corazón de la cultura incaica, es hogar de algunas de las festividades más coloridas y emocionantes de todo el Perú. Estas celebraciones, que combinan tradiciones indígenas y católicas, ofrecen a los visitantes una experiencia única llena de música, baile, y alegría. Descubre las festividades más importantes que no te puedes perder durante tu visita al Cusco.',
    description: ['El Cusco, conocido como el corazón de la cultura incaica, es hogar de algunas de las festividades más coloridas y emocionantes de todo el Perú. Estas celebraciones, que combinan tradiciones indígenas y católicas, ofrecen a los visitantes una experiencia única llena de música, baile, y alegría. Descubre las festividades más importantes que no te puedes perder durante tu visita al Cusco.',
    'Inti Raymi: La Fiesta del Sol',
    'El Inti Raymi es una de las celebraciones más emblemáticas del Cusco y se lleva a cabo cada 24 de junio en honor al dios Sol, Inti. Esta festividad recrea la ceremonia incaica del solsticio de invierno, en la que se le rendía homenaje al sol para asegurar una buena cosecha. Durante el Inti Raymi, se realizan ceremonias rituales en el Templo de Qorikancha y en la fortaleza de Sacsayhuamán, seguidas de coloridos desfiles y representaciones teatrales en la Plaza de Armas de Cusco, además de ello en esta festividad se puede disfrutar del delicioso chiriuchu, un plato típico del Cusco.',
    'Corpus Christi',
    'El Corpus Christi es una festividad católica que se celebra con gran pompa y alegría en el Cusco. Durante esta celebración, se lleva en procesión las imágenes de los santos patrones de las diferentes parroquias de la ciudad, adornadas con flores y vestimentas elaboradas. Además de las procesiones religiosas, el Corpus Christi también incluye ferias, bailes folclóricos y actividades culturales en las plazas y calles del Cusco.',
    "Qoyllur Rit'i: La Fiesta de la Nieve",
    "El Qoyllur Rit'i es una festividad andina que se celebra en el nevado Sinakara, a unas tres horas en auto desde Cusco. Esta festividad, que combina creencias católicas con tradiciones indígenas, atrae a miles de peregrinos de todo el Perú y el mundo, que se congregan para rendir homenaje al Señor de Qoyllur Rit'i y participar en danzas, rituales y procesiones.",
    ],
    location: 'Cusco'
  },
  {
    id: 'blog005',
    slug: 'sabores-unicos-de-la-cocina-cusquena',
    name: 'Descubre los Sabores Únicos de la Cocina Cusqueña',
    slogan: 'Sabores únicos de la Cocina Cusqueña',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'cultural',
    extract: 'La ciudad de Cusco no solo es famosa por sus impresionantes paisajes y su rica historia, sino también por su exquisita cocina, que combina influencias indígenas, españolas y africanas para crear sabores únicos y deliciosos. Sumérgete en la gastronomía cusqueña y descubre algunos de sus platos más emblemáticos y suculentos.',
    description: ['La ciudad de Cusco no solo es famosa por sus impresionantes paisajes y su rica historia, sino también por su exquisita cocina, que combina influencias indígenas, españolas y africanas para crear sabores únicos y deliciosos. Sumérgete en la gastronomía cusqueña y descubre algunos de sus platos más emblemáticos y suculentos.',
    'Cuy al Horno',
    'El cuy, o cobayo, es uno de los platos más  emblemáticos de la gastronomía cusqueña. Preparado al horno y sazonado con hierbas aromáticas (huacatay), el cuy al horno es una delicia que no te puedes perder durante tu visita al Cusco. Su carne tierna y jugosa, acompañada de papas y rocoto, es una verdadera explosión de sabores que deleitará tu paladar.',
    'Rocoto Relleno',
    'El rocoto es un tipo de pimiento picante originario de la región andina, y el rocoto relleno es uno de los platos más populares del Cusco. Se rellena con carne molida, cebolla, aceitunas y especias, y se hornea hasta que esté dorado y crujiente. El resultado es un plato picante y sabroso que te dejará con ganas de más.',
    "Pachamanca",
    "La pachamanca es un plato tradicional de la gastronomía andina que se prepara cocinando carnes y vegetales en un hoyo excavado en la tierra y cubriéndolos con piedras calientes. Esta técnica de cocción lenta le da a la pachamanca un sabor ahumado y delicioso que es difícil de resistir. Suele servirse con papas, camotes, maíz y hierbas aromáticas",
    'Sopa de Quinua',
    'La quinua es un superalimento andino rico en proteínas y nutrientes, y la sopa de quinua es un plato reconfortante y nutritivo que se consume en todo el Cusco. Se prepara cocinando quinua, verduras y carne en un caldo aromático, y se sirve caliente con hierbas frescas y limón. Es perfecta para calentar el cuerpo en las frías noches cusqueñas.',
    'Choclo con Queso',
    'El choclo, o maíz gigante, es un ingrediente básico en la cocina cusqueña, y se suele servir acompañado de queso fresco y rocoto. El contraste entre el dulce sabor del choclo y la cremosidad del queso es simplemente irresistible, y es un bocado perfecto para disfrutar como aperitivo o como acompañamiento.',
    'Bebidas Típicas: Chicha Morada y Pisco Sour',
    'Para acompañar tus comidas, no te pierdas las bebidas típicas del Cusco. La chicha morada es una bebida refrescante hecha a base de maíz morado, piña, canela y clavo de olor, mientras que el pisco sour es un cóctel peruano hecho con pisco, limón, jarabe de azúcar, clara de huevo y un toque de amargo de angostura.',
    'Explora la deliciosa cocina del Cusco y déjate seducir por sus sabores auténticos y suculentos. Cada plato es una ventana a la rica cultura y tradiciones culinarias de esta fascinante región peruana.'
    ],
    location: 'Cusco'
  },
  {
    id: 'blog006',
    slug: 'parques-nacionales-en-cusco',
    name: 'La belleza natural de los parques nacionales en cusco',
    slogan: 'Parques nacionales en Cusco',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'cultural',
    extract: 'Parque Nacional del Manu. El Parque Nacional del Manu es uno de los parques más biodiversos del mundo y ha sido declarado Patrimonio de la Humanidad por la UNESCO. Ubicado en la selva amazónica del sureste de Perú, el Manu alberga una increíble variedad de flora y fauna, incluyendo jaguares, osos de anteojos, y una gran variedad de aves y mariposas. Los visitantes pueden explorar el parque a través de excursiones de varios días, que incluyen caminatas por la selva, paseos en bote por el río Manu, y la oportunidad de avistar animales en su hábitat natural.',
    description: ['Parque Nacional del Manu',
    'El Parque Nacional del Manu es uno de los parques más biodiversos del mundo y ha sido declarado Patrimonio de la Humanidad por la UNESCO. Ubicado en la selva amazónica del sureste de Perú, el Manu alberga una increíble variedad de flora y fauna, incluyendo jaguares, osos de anteojos, y una gran variedad de aves y mariposas. Los visitantes pueden explorar el parque a través de excursiones de varios días, que incluyen caminatas por la selva, paseos en bote por el río Manu, y la oportunidad de avistar animales en su hábitat natural.',
    'Parque Nacional de la Reserva de Tambopata',
    'Otro destino imperdible para los amantes de la naturaleza es el Parque Nacional de la Reserva de Tambopata, ubicado en la región amazónica del sureste de Perú. Este parque es conocido por su impresionante diversidad biológica, que incluye una gran cantidad de hermosas especies de aves, mamíferos, reptiles y plantas. Los visitantes pueden realizar excursiones guiadas por la selva, observar aves desde torres de observación, y visitar áreas de conservación de la vida silvestre donde pueden ver animales en su hábitat natural.',
    'Parque Nacional de Huascarán',
    'En la región andina del Cusco se encuentra el Parque Nacional de Huascarán, hogar de algunas de las montañas más altas de los Andes peruanos, incluyendo el nevado Huascarán, el pico más alto de Perú. Este parque es un paraíso para los amantes del trekking y el montañismo, con una gran variedad de rutas y senderos que ofrecen vistas espectaculares de los paisajes andinos. Además de las montañas, el parque alberga una impresionante variedad de flora y fauna, incluyendo cóndores, vicuñas y una gran variedad de plantas nativas.',
    "Parque Nacional del Valle Sagrado de los Incas",
    "El Parque Nacional del Valle Sagrado de los Incas es otro destino imperdible en el Cusco. Este parque protege una serie de sitios arqueológicos incas, así como una impresionante variedad de paisajes, que incluyen valles, montañas, y ríos. Los visitantes pueden explorar antiguas ruinas incas como Pisac y Ollantaytambo, así como disfrutar de actividades al aire libre como caminatas, paseos en bicicleta, y rafting en aguas bravas.",
    'Santuario Nacional de Megantoni',
    'El Santuario Nacional de Megantoni es una reserva natural ubicada en la selva amazónica del sureste de Perú, cerca del Parque Nacional del Manu. Este santuario protege una impresionante variedad de ecosistemas, incluyendo bosques nubosos, selvas tropicales y páramos de alta montaña. Los visitantes pueden realizar excursiones guiadas por la selva, observar una gran variedad de flora y fauna, y visitar comunidades nativas que viven en armonía con su entorno natural.',
    'Explora la belleza natural del Cusco y sumérgete en la impresionante biodiversidad de sus parques nacionales. Cada parque ofrece una experiencia única y emocionante que te permitirá conectar con la naturaleza y descubrir la increíble diversidad biológica de esta fascinante región peruana.',
    ],
    location: 'Cusco'
  },
  {
    id: 'blog007',
    slug: 'areas-naturales-protegidas-en-cusco',
    name: 'Áreas naturales protegidas que puedes visitar en Cusco',
    slogan: 'Áreas naturales protegidas en Cusco',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'aventura',
    extract: 'Cusco, una región rica en historia y cultura, también alberga algunas de las áreas naturales protegidas más espectaculares de Perú. Aquí te menciono algunas de las más destacadas que puedes visitar:',
    description: ['Cusco, una región rica en historia y cultura, también alberga algunas de las áreas naturales protegidas más espectaculares de Perú. Aquí te menciono algunas de las más destacadas que puedes visitar:',
    'Santuario Histórico de Machu Picchu',
    'Machu Picchu, además de ser una de las Nuevas Siete Maravillas del Mundo, es un santuario histórico que protege no solo las famosas ruinas incas, sino también una rica biodiversidad en sus alrededores. Los visitantes pueden explorar las ruinas y también hacer caminatas por senderos naturales.',
    'Área de conservación privada Qosqoccahuarina',
    'El Área de Conservación Privada (ACP) Qosqoccahuarina es un santuario natural ubicado en la región del Cusco, Perú, que ofrece a los visitantes la oportunidad de explorar paisajes impresionantes, flora y fauna únicas, y experiencias auténticas en un entorno natural protegido. Alberga una impresionante variedad de flora y fauna, incluyendo especies endémicas y en peligro de extinción. En sus bosques de altura, se pueden encontrar especies como el oso de anteojos, el cóndor andino, la taruka (ciervo andino), así como una gran diversidad de aves, reptiles, y mariposas.',
    'Reserva Paisajística Nor Yauyos-Cochas',
    'Este parque se centra alrededor del imponente Nevado Ausangate, una de las montañas más altas del Perú. Es conocido por sus impresionantes paisajes montañosos, glaciares y lagunas. Es ideal para trekking y montañismo, con rutas como la famosa caminata del Ausangate.',
    "Área de Conservación Regional Choquequirao",
    "Choquequirao es a menudo comparada con Machu Picchu y ofrece una experiencia similar, pero con menos turistas. Esta área protegida es rica en biodiversidad y también alberga impresionantes ruinas incas. La caminata para llegar a Choquequirao es exigente, pero vale la pena por sus vistas y la experiencia de exploración.",
    'Bosque de Protección Alto Mayo',
    'Este bosque es menos conocido, pero es un importante área de conservación que protege la cuenca del río Mayo. Es hogar de muchas especies endémicas y en peligro de extinción, así como de comunidades locales que practican la agricultura sostenible',
    'Cada una de estas áreas ofrece experiencias únicas, desde la exploración de antiguas ruinas incas hasta la inmersión en algunos de los ecosistemas más diversos del mundo. Si planeas visitar Cusco, incluir algunas de estas áreas naturales protegidas en tu itinerario te permitirá disfrutar de la belleza natural y la riqueza cultural de la región.',
    ],
    location: 'Cusco'
  },
  {
    id: 'blog008',
    slug: 'significado-de-los-trajes-tipicos-del-cusco',
    name: 'La Belleza y Significado de los Trajes Típicos del Cusco',
    slogan: 'Significado de los Trajes Típicos del Cusco',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'cultural',
    extract: 'Las vestimentas típicas de Cusco son un reflejo de la rica herencia cultural y las tradiciones ancestrales de la región. Estas prendas son conocidas por sus colores vibrantes, diseños intrincados y el uso de materiales naturales. A continuación, te detallo algunas de las vestimentas más emblemáticas:',
    description: ['Las vestimentas típicas de Cusco son un reflejo de la rica herencia cultural y las tradiciones ancestrales de la región. Estas prendas son conocidas por sus colores vibrantes, diseños intrincados y el uso de materiales naturales. A continuación, te detallo algunas de las vestimentas más emblemáticas:',
    'Polleras',
    'Las polleras son faldas anchas y coloridas que usan las mujeres. Están hechas de lana de alpaca o de oveja y suelen estar decoradas con bordados detallados y cintas. Las mujeres suelen usar varias polleras superpuestas, lo que da un aspecto voluminoso y vistoso.',
    'Monteras',
    'Los sombreros tradicionales que usan tanto hombres como mujeres en Cusco varían según la región específica. Las monteras de las mujeres suelen estar adornadas con bordados y apliques de colores brillantes. Pueden ser de diferentes formas, incluyendo las monteras de ala ancha y los sombreros más pequeños y redondos.',
    'Llicllas',
    'Las llicllas son mantas tejidas a mano que las mujeres usan sobre los hombros. Sirven tanto para abrigarse como para cargar a los niños pequeños o transportar objetos. Estas mantas están hechas de lana y decoradas con patrones geométricos y colores vivos.',
    "Ponchos",
    "Los hombres típicamente usan ponchos, que son capas de lana tejidas con aberturas para la cabeza. Los ponchos están decorados con patrones tradicionales y colores que a menudo tienen significados específicos, como la identificación de la comunidad o el estatus social del portador.",
    'Chullos',
    'Los chullos son gorros tejidos con orejeras, hechos de lana de alpaca o de oveja. Son conocidos por sus colores vivos y patrones intrincados. Los chullos son usados tanto por hombres como por mujeres y son esenciales para protegerse del frío en las alturas andinas.',
    'Chumpis',
    'Los chumpis son cinturones tejidos que las mujeres usan para ajustar sus polleras. Están decorados con patrones tradicionales y pueden ser bastante anchos. Además de su función práctica, los chumpis también tienen un valor estético importante en la vestimenta tradicional.',
    'Ojotas',
    'Las ojotas son sandalias hechas de cuero o llantas de automóvil recicladas. Son el calzado tradicional que usan tanto hombres como mujeres en las zonas rurales de Cusco. Aunque son simples, son muy duraderas y adecuadas para el terreno andino.',
    'Camisas y Blusas Bordadas',
    'Tanto los hombres como las mujeres usan camisas y blusas bordadas. Los diseños varían según la región, pero a menudo incluyen motivos florales y geométricos. Estas prendas son usualmente de algodón o lana y complementan el resto de la vestimenta tradicional.',
    'Unkus',
    'Los hombres en algunas comunidades usan unkus, que son túnicas sin mangas hechas de lana. Son simples pero a menudo decoradas con patrones geométricos y colores representativos de su comunidad.',
    'Estas vestimentas no solo son una expresión de la identidad cultural de Cusco, sino que también son testimonio de la habilidad artesanal y la riqueza de las tradiciones que se han transmitido de generación en generación. Al visitar Cusco, es común ver a la gente local vistiendo estas prendas, especialmente durante festivales y celebraciones tradicionales.'
    ],
    location: 'Cusco'
  },
  {
    id: 'blog009',
    slug: 'impresionante-arquitectura-inca',
    name: 'Explora la impresionante arquitectura inca que se aprecia en el Cusco',
    slogan: 'Impresionante arquitectura inca',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'cultural',
    extract: 'Cusco es una región rica en historia y cultura, conocida por su impresionante arquitectura incaica que ha perdurado a lo largo de los siglos. Aquí se destacan algunas de las estructuras arquitectónicas más emblemáticas de los incas en Cusco:',
    description: ['Cusco es una región rica en historia y cultura, conocida por su impresionante arquitectura incaica que ha perdurado a lo largo de los siglos. Aquí se destacan algunas de las estructuras arquitectónicas más emblemáticas de los incas en Cusco:',
    'Machu Picchu',
    'Uno de los sitios arqueológicos más famosos del mundo, Machu Picchu es una ciudadela inca ubicada en la cima de una montaña a 2,430 metros sobre el nivel del mar. Construida en el siglo XV bajo el emperador Pachacútec, Machu Picchu es conocida por sus estructuras de piedra perfectamente ensambladas, sin el uso de mortero, y por su intrincado sistema de terrazas agrícolas.',
    'Sacsayhuamán',
    'Este es un complejo arqueológico situado en una colina al norte de Cusco. Sacsayhuamán es conocido por sus enormes piedras megalíticas, algunas de las cuales pesan más de 100 toneladas, ensambladas con una precisión increíble. Las murallas de Sacsayhuamán tienen formas zigzagueantes y se cree que el complejo tenía funciones tanto religiosas como militares.',
    'Qorikancha (Templo del Sol)',
    'Originalmente el templo más importante del imperio inca, el Qorikancha estaba dedicado al dios Inti (el Sol). Los españoles construyeron el Convento de Santo Domingo sobre sus cimientos, pero aún se pueden ver las impresionantes paredes de piedra inca en la base. Las piedras están tan perfectamente cortadas y alineadas que no se puede insertar una hoja de papel entre ellas.',
    "Ollantaytambo",
    "Ubicado en el Valle Sagrado de los Incas, Ollantaytambo es un complejo arqueológico que incluye terrazas agrícolas, estructuras religiosas y residenciales. Destacan el Templo del Sol y la gran plaza central. Este sitio fue un importante centro administrativo, militar y religioso.",
    'Pisac',
    'Pisac es otro sitio arqueológico en el Valle Sagrado, famoso por sus terrazas agrícolas y su complejo de templos, plazas y residencias. Las ruinas incluyen un cementerio inca, un observatorio astronómico y el Templo del Sol. Pisac también ofrece una impresionante vista del valle circundante.',
    'Choquequirao',
    'Conocida como la "hermana sagrada de Machu Picchu", Choquequirao es una ciudad inca menos conocida pero igualmente impresionante. Se encuentra en una ubicación remota y ofrece una experiencia similar a la de Machu Picchu, pero con menos turistas. Sus estructuras incluyen templos, plazas y terrazas agrícolas.',
    'Tambomachay',
    'Este sitio, también conocido como los Baños del Inca, está ubicado cerca de Cusco y se cree que tenía funciones religiosas y de descanso. Tambomachay es conocido por sus acueductos, canales y cascadas de agua que probablemente tenían un propósito ceremonial relacionado con el culto al agua.',
    'Pikillacta',
    'Aunque es anterior a la cultura inca, Pikillacta fue ocupada y expandida por los incas. Es una de las pocas ciudades preincaicas que los incas adoptaron y desarrollaron. Pikillacta es notable por su diseño urbano planificado y sus grandes edificios multifuncionales.',
    'Moray',
    'Moray es un sitio arqueológico inusual, conocido por sus terrazas circulares concéntricas. Se cree que estas terrazas fueron un laboratorio agrícola inca donde experimentaban con diferentes cultivos y microclimas. La profundidad y el diseño de las terrazas crean variaciones en la temperatura que permitían la investigación agrícola.',
    'Estas estructuras reflejan la avanzada ingeniería y el profundo conocimiento de los incas sobre arquitectura, agricultura y astronomía. Visitar estos sitios ofrece una visión fascinante de la grandeza y sofisticación de la civilización inca.'
    ],
    location: 'Cusco'
  },
  {
    id: 'blog010',
    slug: 'melodias-y-la-historia-de-la-musica-andina',
    name: 'Explora las Melodías y la Historia de la Música Andina en el Cusco',
    slogan: 'Melodías y la Historia de la Música Andina',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'cultural',
    extract: 'La música vernacular de Cusco es una parte integral de su rica herencia cultural, reflejando las tradiciones, la historia y la vida cotidiana de la región andina. Esta música se caracteriza por el uso de instrumentos tradicionales y la incorporación de elementos prehispánicos e influencias coloniales. Aquí se destacan algunos géneros y estilos musicales típicos de Cusco:',
    description: ['La música vernacular de Cusco es una parte integral de su rica herencia cultural, reflejando las tradiciones, la historia y la vida cotidiana de la región andina. Esta música se caracteriza por el uso de instrumentos tradicionales y la incorporación de elementos prehispánicos e influencias coloniales. Aquí se destacan algunos géneros y estilos musicales típicos de Cusco:',
    'Huayno',
    'El huayno es uno de los géneros más representativos de la música andina. Se caracteriza por un ritmo alegre y una melodía que suele acompañarse de danzas. Las letras del huayno a menudo abordan temas de amor, desamor, la vida rural y la naturaleza.',
    'Carnaval Cusqueño',
    'Esta es una música festiva que se toca durante las celebraciones de carnaval en Cusco. Los ritmos son vibrantes y alegres, y las canciones suelen estar acompañadas por danzas coloridas. Los carnavales cusqueños son famosos por su exuberancia y la participación de la comunidad.',
    'Danzas Folklóricas',
    'Las danzas folklóricas de Cusco, como la Danza de Tijeras y el Wayra, tienen su propia música característica. La Danza de Tijeras, por ejemplo, es una danza acrobática y ritual que se acompaña de música tocada con violín y arpa.',
    "Muliza",
    "Aunque más común en la región central de Perú, la muliza también se escucha en Cusco. Este género se caracteriza por su ritmo marcial y su melodía nostálgica, y es común en festividades y celebraciones religiosas.",
    'Valicha',
    '"Valicha" es una de las canciones más emblemáticas de Cusco. Compuesta por Miguel Ángel Hurtado en 1945, es una pieza de huayno que se ha convertido en un himno de la cultura cusqueña. La canción cuenta la historia de una mujer llamada Valicha y es ampliamente interpretada en festividades y eventos culturales.',
    ],
    location: 'Cusco'
  },
  {
    id: 'blog011',
    slug: '5-maneras-de-llegar-a-machupicchu',
    name: '5 Maneras de Llegar a Machupicchu',
    slogan: '5 Maneras de llegar a Machupicchu',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'cultural',
    extract: 'Machu Picchu, reconocida como una de las 7 maravillas del mundo, es un tesoro ancestral enclavado entre las majestuosas montañas de los Andes peruanos. Sin embargo, este sitio trasciende la mera etiqueta de destino turístico; es una experiencia envolvente que te sumerge en un viaje a través del tiempo y el espacio, revelando la riqueza de su naturaleza y cultura en cada uno de sus rincones.',
    description: ['Machu Picchu, reconocida como una de las 7 maravillas del mundo, es un tesoro ancestral enclavado entre las majestuosas montañas de los Andes peruanos. Sin embargo, este sitio trasciende la mera etiqueta de destino turístico; es una experiencia envolvente que te sumerge en un viaje a través del tiempo y el espacio, revelando la riqueza de su naturaleza y cultura en cada uno de sus rincones.',
    '1.- Camino Inca',
    'Para los amantes de la aventura y la historia, el Camino Inca ofrece una experiencia única. Esta ruta de varios días te lleva a través de antiguos senderos incas, pasando por impresionantes paisajes montañosos y ruinas arqueológicas antes de llegar a Machu Picchu.',
    '2.- Tren desde Cusco o Ollantaytambo',
    'Para aquellos que prefieren una opción más cómoda, el tren es una excelente alternativa. Hay trenes que parten desde la ciudad de Cusco y desde el pueblo de Ollantaytambo, ambos ofreciendo vistas panorámicas espectaculares durante el viaje.',
    '3.- Sendero de Salkantay',
    'Esta ruta alternativa al Camino Inca es perfecta para los aventureros que desean explorar paisajes variados, incluyendo montañas nevadas, selva tropical y pequeños pueblos andinos antes de llegar a Machu Picchu.',
    "4.- Autobús desde Aguas Calientes",
    "Una vez que llegues al pueblo de Aguas Calientes, puedes tomar un autobús que te llevará hasta la entrada de Machu Picchu en solo 30 minutos. Esta es una opción conveniente para aquellos que desean evitar caminatas largas o empinadas.",
    '5.- Helicóptero',
    'Para una experiencia verdaderamente exclusiva, algunas compañías ofrecen tours en helicóptero que te llevan directamente desde Cusco hasta Machu Picchu, brindándote vistas aéreas incomparables de los paisajes andinos en el camino.',
    'En resumen, llegar a la maravilla de Machu Picchu es mucho más que simplemente alcanzar un destino. Cada ruta, ya sea el Camino Inca, el tren desde Cusco, o cualquier otra opción, ofrece una experiencia enriquecedora por derecho propio. Desde los paisajes impresionantes hasta las antiguas ruinas que revelan la historia de los incas, cada paso del camino es una aventura digna de ser vivida. Así que, sin importar la vía que elijas, el cómo llegar a esta maravilla ya es una experiencia extraordinaria en sí misma.'
    ],
    location: 'Cusco'
  },
  {
    id: 'blog012',
    slug: 'una-joya-perdida-en-los-andes-peruanos',
    name: 'Descubre la Maravilla de Machu Picchu: Una Joya Perdida en los Andes Peruanos',
    slogan: 'Una Joya Perdida en los Andes Peruanos',
    images: ['post1.jpg', 'post1.jpg', 'post1.jpg', 'post1.jpg'],
    category: 'cultural',
    extract: 'Machu Picchu, una de las 7 maravillas del mundo, un tesoro ancestral escondido entre las imponentes montañas de los Andes peruanos, es mucho más que un simple destino turístico: es una experiencia transformadora que te transporta a través del tiempo y el espacio en cada rincón de su naturaleza y cultura. ',
    description: ['Machu Picchu, una de las 7 maravillas del mundo, un tesoro ancestral escondido entre las imponentes montañas de los Andes peruanos, es mucho más que un simple destino turístico: es una experiencia transformadora que te transporta a través del tiempo y el espacio en cada rincón de su naturaleza y cultura.',
    'Desde su descubrimiento en 1911 por el arqueólogo Hiram Bingham, Machu Picchu ha cautivado los corazones de viajeros y exploradores de todo el mundo. Sin embargo, la verdadera magia de este sitio fue revelada por el campesino Melchor Arteaga, quien compartió secretos más ocultos de Machu Picchu con el mundo. Por esta razón, muchos autores argumentan que, si bien Hiram Bingham fue el descubridor científico reconocido, Melchor Arteaga fue el primero en descubrir esta maravilla perdida.',
    'Sus intrincadas terrazas, templos sagrados y estructuras misteriosas te invitan a sumergirte en la grandeza de una civilización antigua.',
    ],
    location: 'Cusco'
  }
]

const reasons = [
  {
    id: 'reason001',
    title: 'Seguridad en tus compras',
    description: ['Somos una empresa certificada por el Ministerio de Comercio Exterior y Turismo del Perú, específicamente por la Gerencia de Turismo del Cusco, como agentes de viajes en el país. Esta certificación garantiza nuestro compromiso con los estándares de calidad y profesionalismo en la industria del turismo.',
    'Además de nuestra certificación oficial, contamos con nuestro equipo el cual  está formado por profesionales apasionados y conocedores del destino, listos para brindar asesoramiento experto y atención personalizada en cada viaje.',
    'Estamos comprometidos con la excelencia en cada paso del proceso de viaje, asegurándonos de que cada cliente experimente lo mejor que el destino Peruano tiene para ofrecer.'],
    icon: '/icons/lock.svg'
  },
  {
    id: 'reason002',
    title: 'Calidad de Viaje',
    description: ['Como empresa, nos enorgullecemos de ofrecer servicios de alta calidad en cada aspecto de su experiencia de viaje. Hemos establecido alianzas estratégicas con las principales empresas operadoras en el sector del turismo, lo que nos permite garantizar que nuestros clientes reciban lo mejor en cuanto a alojamiento, transporte y alimentación.',
    'Nos ocupamos de todos los detalles para liberar a nuestros clientes del estrés al momento de elegir sus opciones de hospedaje, transporte y alimentación. Nuestro objetivo es proporcionarles una experiencia sin preocupaciones, donde puedan disfrutar plenamente de su viaje sin tener que preocuparse por la logística.',
    'Ya sea que estén buscando una escapada relajante o una aventura emocionante, nos encargamos de desarrollar todos los aspectos de su itinerario para que puedan disfrutar al máximo de su experiencia de viaje. Con nuestro compromiso con la calidad y nuestro enfoque en la atención al cliente, nos esforzamos por superar las expectativas de quienes confían en nosotros para organizar sus viajes.'
    ],
    icon: '/icons/airplane.svg'
  },
  {
    id: 'reason003',
    title: 'Kit Andino',
    description: ['El Kit Andino que ofrecemos es una completa ayuda para todos nuestros viajeros, cuidadosamente diseñado para garantizar su comodidad y satisfacción durante su estancia. Además de los regalos y recuerdos que añaden un toque especial a su experiencia, incluimos una variedad de amenities que van desde productos de cuidado personal hasta deliciosos snacks cusqueños que les permiten saborear la auténtica cocina local.',
    'Demostrando nuestro compromiso con la seguridad y el bienestar de nuestros viajeros, hemos incorporado elementos como alcohol y hojas de coca, que no solo son parte de la cultura andina, sino que también sirven como precauciones útiles durante su viaje. Además, pensando en el cuidado personal, hemos incluido lipstick para proteger la piel de los efectos resecantes del clima.',
    'Con el Kit Andino, no solo buscamos brindar un servicio excepcional, sino también crear una experiencia memorable y auténtica que refleja la riqueza cultural y la hospitalidad de la región.'
    ],
    icon: '/icons/backpack.svg'
  },
  {
    id: 'reason004',
    title: 'Atención las 24 Horas',
    description: ['Como agencia de viajes, nuestro compromiso con la satisfacción del cliente es primordial. Por eso, ofrecemos atención las 24 horas, los 7 días de la semana, para atender cualquier requerimiento o inquietud que puedan tener nuestros turistas durante su viaje. Estamos disponibles en todo momento porque nos preocupamos por su bienestar y queremos garantizar que su experiencia sea lo más placentera posible. Nuestro objetivo es asegurarnos de que cada uno de nuestros clientes esté completamente satisfecho con los servicios que brindamos y con la experiencia general de su viaje.'],
    icon: '/icons/clock.svg'
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