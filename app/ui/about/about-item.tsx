export default function AboutItem ({item, slogan, className}: any) {
  return (
    <div className="max-w-md text-center md:max-w-fit 2xl:w-[1500px]">
      <div className={`md:flex md:text-left md:gap-10 xl:gap-24 items-center ${className}`}>
        <div>
          <h2 className="text-[32px] mb-6 text-center">{item.title}</h2>
          <p className="text-[#7D7D7D] mb-5">{item.description}</p>
        </div>
        <div className="min-w-72 max-w-md relative flex justify-center m-auto md:min-w-[46%]">
          <picture className="w-full">
            <img className="w-full aspect-[9/5] object-cover rounded-xl" src="/icons/news1.jpg" alt="" />
          </picture>
          <div className="absolute -bottom-2 bg-black/[0.8] text-white rounded-xl w-[90%] leading-[40px] text-center">{slogan}</div>
        </div>
      </div>
    </div>
  )
}