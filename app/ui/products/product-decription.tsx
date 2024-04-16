const product = {
  name: 'machu picchu',
  title: 'Machu Picchu, una aventura inolvidable',
  description: "Embarcate en el tour del Valle Encantador, una experiencia que te conectara con la serenidad y la belleza natural. Durante la caminata, seras testigo de una laguna impresionante que alberga mas de 100 especies asi como paisajes espectaculares y monumentos culturales. Descubre el famoso bosque de eucaliptos del Cusco, pasa por lugares emblematicos como Qenqo y el templo de la tranquilidad y la magia del valle encantado mientras te conectas con la esencia misma la naturaleza",
  items: [
    {
      id: "1",
      icon: "people",
      title: "Aventura en privado y compartido",
      text: "El tour se puede llevar de manera privada o acompanado con otras personas."
    },
    {
      id: "2",
      icon: "person-walking",
      title: "Tipo de tour",
      text: "Cultural y aventura"
    },
    {
      id: "3",
      icon: "clock",
      title: "Duracion",
      text: "4 Dias - 3 Noches | 3 Dias - 2 Noches"
    },
    {
      id: "4",
      icon: "alert",
      title: "Dificultad",
      text: "Facil"
    }
  ],
  itinerary: [
    {
      id: '11',
      day: 'Dia 1',
      activities: [
        {id: 'day1', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
        {id: 'day2', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
        {id: 'day3', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
        {id: 'day4', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
      ]
    },
    {
      id: '12',
      day: 'Dia 2',
      activities: [
        {id: 'day1', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
        {id: 'day2', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
        {id: 'day3', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
        {id: 'day4', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
      ]
    },
    {
      id: '13',
      day: 'Dia 3',
      activities: [
        {id: 'day1', start: '7:00', end:'8:00', descp: 'Desayuno en el Hotel'},
        {id: 'day2', start: '7:00', end:'12:00', descp: 'Esto es la prueba mas absurda que puede existir ent todo el planeta'},
        {id: 'day3', start: '13:00', end:'18:00', descp: 'Paseo con el guia asignado'},
        {id: 'day4', start: '18:00', end:'23:00', descp: 'Cena de gala en el hotel'}
      ]
    }
  ]
}


export default function ProductDescription() {
  return (
    <div className="px-5">
      <h1 className="text-3xl font-semibold">{product.title}</h1>
      <p className="text-[#6D6D6D] py-4 mb-4">{product.description}</p>
      <div className="py-8 border-t-[1px] border-[#D2D2D2]">
        <ul className="flex flex-col gap-6">
          {product.items.map(item => (
            <li key={item.id} className="flex gap-4 items-start">
              <img className="w-6 h-6" src={`/icons/${item.icon}.svg`} alt="" />
              <div>
                <h3 className="leading-4 mb-1">{item.title}</h3>
                <p className="text-[#6D6D6D] text-sm leading-4">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-8 border-t-[1px] border-[#D2D2D2]">
        <h2 className="text-2xl text-center">Itinerario</h2>
        <ul className="flex flex-col gap-4 pt-2">
          {product.itinerary.map(item => (
            <li key={item.id}>
              <h3 className="text-lg">{item.day}</h3>
              <ul className="flex flex-col gap-2 pl-4">
                {item.activities.map(activity => (
                  <li key={activity.id} className="flex items-center text-[#6D6D6D] leading-5">
                    <div className="w-28 flex shrink-0">
                      <div>{activity.start}</div>
                      &nbsp;-&nbsp;
                      <div>{activity.end}</div>
                    </div>
                    <p>{activity.descp}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-[#D2D2D2] py-2 px-6">
        <div className="leading-3">
          <h3 className="text-xl">US$ 380</h3>
          <span className="block text-[#6D6D6D]">por persona</span>
          <h3 className="text-xl">PEN 780</h3>
        </div>
        <button className="bg-[#052659] text-white text-lg w-32 h-12 rounded-xl">Reservar</button>
      </div>
    </div>
  )
}