export default function Engagement ({item}:any) {
  return (
    <div className="text-center md:max-w-[800px]">
      <h2 className="text-[32px] mb-6">{item.title}</h2>
      <p className="text-[#7D7D7D] my-5">{item.description}</p>
      <ul className="flex flex-col gap-5 mx-8 text-[#7D7D7D]">
        <li className="flex gap-5 items-center text-left py-2 border-dashed border-y border-black">
          <img className="w-12 h-12" src="/icons/1-square.svg" alt="" />
          <p>{item.first}</p>
        </li>
        <li className="flex gap-5 items-center text-left py-2 border-dashed border-y border-black">
          <p>{item.second}</p>
          <img className="w-12 h-12" src="/icons/2-square.svg" alt="" />
        </li>
        <li className="flex gap-5 items-center text-left py-2 border-dashed border-y border-black">
          <img className="w-12 h-12" src="/icons/3-square.svg" alt="" />
          <p>{item.third}</p>
        </li>
        <li className="flex gap-5 items-center text-left py-2 border-dashed border-y border-black">
          <p>{item.fourth}</p>
          <img className="w-12 h-12" src="/icons/4-square.svg" alt="" />
        </li>
      </ul>
      <p className="text-[#7D7D7D] my-5">{item.extract}</p>
    </div>
  )
}