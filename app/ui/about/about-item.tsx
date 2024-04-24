export default function AboutItem ({item, slogan}: any) {
  return (
    <div className="max-w-md text-center">
      <h2 className="text-[32px] mb-6">{item.title}</h2>
      <p className="text-[#7D7D7D] mb-5">{item.description}</p>
      <div className="min-w-72 max-w-md relative flex justify-center m-auto">
        <picture>
          <img className="w-full aspect-[9/5] object-cover rounded-xl" src="/icons/news1.jpg" alt="" />
        </picture>
        <div className="absolute -bottom-2 bg-black/[0.8] text-white rounded-xl w-[90%] leading-[40px]">{slogan}</div>
      </div>
    </div>
  )
}