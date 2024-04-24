export default function ProductImage({images, setShowImages}: any) {
  return (
    <div className="relative w-full cursor-pointer"
      onClick={() => {setShowImages(true)}}
    >
      <picture>
        <img className="w-full aspect-[3/2] object-cover" src={images[0]} alt="" />
      </picture>
      <div className="absolute flex justify-end items-end inset-0">
        <div className="text-white bg-[#222222]/[0.66] rounded text-sm px-3 py-1 mr-3 mb-4">
          1 / {images.length}
        </div>
      </div>
    </div>
  )
}