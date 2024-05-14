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


interface ProductDescriptionProps {
  title: string;
  description: string;
  items: Item[];
  itinerary: ItineraryItem[];
}

export default function ProductDescription({
  title,
  description,
  items,
  itinerary,
}: ProductDescriptionProps) {

  return (
    <>
      <h1 className="text-3xl font-semibold md:hidden">{title}</h1>
      <p className="text-[#6D6D6D] py-4 mb-2">{description}</p>
      <div className="py-6 border-t-[1px] border-dashed border-[#D2D2D2]">
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
      <div className="pt-2 pb-8 border-t-[1px] border-[#D2D2D2]">
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
      <div className="py-2 border-t-[1px] border-[#D2D2D2]">
        <h2 className="text-2xl text-center">Te ofrecemos</h2>
        <ul className="flex flex-col gap-4 pt-4">
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
    </>
  )
}