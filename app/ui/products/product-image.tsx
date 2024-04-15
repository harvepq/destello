export default function ProductImage() {
  return (
    <div className="relative w-full cursor-pointer">
      <picture>
        <img className="w-full aspect-[3/2] object-cover" src="/icons/news1.jpg" alt="" />
      </picture>
      <div className="absolute flex justify-end items-end inset-0">
        <div className="text-white bg-[#222222]/[0.66] rounded text-sm px-3 py-1 mr-3 mb-4">
          1 / 50
        </div>
      </div>
    </div>
  )
}