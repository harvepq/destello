export default function AboutItem () {
  return (
    <div className="text-center">
      <h2 className="text-[32px] mb-6">Quienes Somos?</h2>
      <p className="text-[#7D7D7D] my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur in eros eu pharetra. Vivamus efficitur nisl quis tincidunt posuere. Donec lacinia molestie ornare. Proin sollicitudin urna sed vulputate fermentum. Donec at dapibus purus, non ultricies nunc. Phasellus sagittis magna sit amet orci rutrum condimentum. Praesent in velit eget neque euismod accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      <div className="min-w-72 max-w-96 relative flex justify-center m-auto">
        <picture>
          <img className="w-full aspect-[9/5] object-cover rounded-xl" src="/icons/news1.jpg" alt="" />
        </picture>
        <div className="absolute -bottom-2 bg-black/[0.8] text-white rounded-xl w-[90%] leading-[40px]">Tu aventura es nuestra pasion</div>
      </div>
    </div>
  )
}