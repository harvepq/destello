export default function ReasonCard({title, description, icon} : any) {
  return(
    <div className="flex flex-col gap-4 items-center min-w-72 max-w-80 text-center">
      <img className="h-14" src={icon} alt="" />
      <h3 className="text-xl w-40 leading-6">{title}</h3>
      <p className="text-[#6D6D6D]">{description}</p>
    </div>
  )
}