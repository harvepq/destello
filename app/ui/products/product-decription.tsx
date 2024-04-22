interface Item {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Activity {
  id: string;
  start: string;
  end: string;
  descp: string;
}

interface ItineraryItem {
  id: string;
  name: string;
  activities: Activity[];
}

interface Prices {
  dollars: number;
  soles: number;
}

interface ProductDescriptionProps {
  title: string;
  description: string;
  prices: Prices;
  people: number;
  items: Item[];
  itinerary: ItineraryItem[];
}

export default function ProductDescription({
  title,
  description,
  prices,
  people,
  items,
  itinerary,
}: ProductDescriptionProps) {

  return (
    <div className="px-5">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-[#6D6D6D] py-4 mb-4">{description}</p>
      <div className="py-8 border-t-[1px] border-[#D2D2D2]">
        <ul className="flex flex-col gap-6">
          {items.map(item => (
            <li key={item.id} className="flex gap-4 items-start">
              <img className="w-6 h-6" src={`/icons/${item.icon}.svg`} alt="" />
              <div>
                <h3 className="leading-4 mb-1">{item.title}</h3>
                <p className="text-[#6D6D6D] text-sm leading-4">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-8 border-t-[1px] border-[#D2D2D2]">
        <h2 className="text-2xl text-center">Itinerario</h2>
        <ul className="flex flex-col gap-4 pt-2">
          {itinerary.map(item => (
            <li key={item.id}>
              <h3 className="text-lg">{item.name}</h3>
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
          <h3 className="text-xl">US$ {prices.dollars}</h3>
          <span className="block text-[#6D6D6D]">por {people} persona</span>
          <h3 className="text-xl">PEN {prices.soles}</h3>
        </div>
        <button className="bg-[#052659] text-white text-lg w-32 h-12 rounded-xl">Reservar</button>
      </div>
    </div>
  )
}