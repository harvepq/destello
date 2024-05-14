export default function ProductImage({images, setShowImages}: any) {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-2 md:p-6">
      <div className="relative w-full cursor-pointer md:rounded-tl-xl rounded-bl-xl overflow-hidden"
        onClick={() => {setShowImages(true)}}
      >
        <picture>
          <img className="w-full aspect-[3/2] object-cover md:aspect-[1]" src={`/products/${images[0]}`} alt="" />
        </picture>
        <div className="absolute flex justify-end items-end inset-0 md:hidden">
          <div className="text-white bg-[#222222]/[0.66] rounded text-sm px-3 py-1 mr-3 mb-4">
            1 / {images.length}
          </div>
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-2 md:gap-2">
        <div className="w-full cursor-pointer">
          <picture>
            <img className="w-full aspect-[1] object-cover" src={`/products/${images[1]}`} alt="" />
          </picture>
        </div>
        <div className="w-full cursor-pointer rounded-tr-xl overflow-hidden">
          <picture>
            <img className="w-full aspect-[1] object-cover" src={`/products/${images[2]}`} alt="" />
          </picture>
        </div>
        <div className="w-full cursor-pointer">
          <picture>
            <img className="w-full aspect-[1] object-cover" src={`/products/${images[3]}`} alt="" />
          </picture>
        </div>
        <div className="w-full cursor-pointer rounded-br-xl overflow-hidden">
          <picture>
            <img className="w-full aspect-[1] object-cover" src={`/products/${images[4]}`} alt="" />
          </picture>
        </div>
      </div>
    </div>
  )
}