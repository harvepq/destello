const products =[
  {
    id: 'destello001',
    slug: 'choquequirao',
    name: 'Choquequirao',
    title: 'Chquequirao 4D / 3N',
    description: "Explora la 'hermana sagrada', de Machu Picchu, de donde la impresionante arquitectura y la atmosfera misteriosa te cautivara. Unete a esta expedicion hacia un sitio arqueologico en constante descubrimiento y dejate maravillar por la majestuosidad de Choquequirao.",
    images: ['product1.jpeg'],
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
        title: 'Tipo de tour',
        description: 'Cultural y aventura',
        icon: 'person-walking'
      },
      {
        id: 'item3',
        title: 'Duracion',
        description: '4 Dias / 3 Noches',
        icon: 'clock'
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
    description: "El trekking de Salkantay te sumerge en una experiencia icomparable. Desde exhuberantes bosques tropicales hasta majestuosas cumbres nevadas, cada paso te lleva a traves de paisajes sorprendentes. Preparate para una aventura inolvidable que te dejara maravillado por la diversidad de naturaleza.",
    images: ['product1.jpeg'],
    prices: {dollars: 380, soles: 700},
    people: 2,
    items: [
      {
        id: 'item1',
        title: 'Aventura en privado y compartido',
        description: 'El tour se lleva de manera compartida con otros turistas que buscan lo mismo',
        icon: 'people'
      },
      {
        id: 'item2',
        title: 'Tipo de tour',
        description: 'Aventura',
        icon: 'person-walking'
      },
      {
        id: 'item3',
        title: 'Duracion',
        description: '4 Dias / 3 Noches | 5 Dias / 4 Noches',
        icon: 'clock'
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

  }
]

const blogs = [
  {
    id: 1
  }
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

const tours = [
  {
    id: 2
  }
]

module.exports = {
  products,
  blogs,
  reasons,
  tours
}