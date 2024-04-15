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
  ]
}


export default function ProductDescription() {
  return (
    <div className="">
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
    </div>
  )
}