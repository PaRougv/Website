import { shoe8 } from "../assets/images"
import ButtonClick from "../components/ButtonClick"

const SuperQuality = () => {
  return (<section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full">
    <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
            We Provide You <span className="text-coral-red"> Super </span> 
            <span className="text-coral-red">
                Quality
            </span> Shoes.
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
            Shoes Build like NeVeR before 
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11">
            <ButtonClick label ="More Info" />
        </div>
    </div>
    <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
    </div>
  </section>)
}

export default SuperQuality