import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import ButtonClick from "./ButtonClick"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
            <img src={offer} width={773} height={687} className="object-contain w-full"/>
        </div>
        <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
            <span className="text-coral-red"> Special  </span> 
            <span className="text-black">
                Offers !!
            </span> 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
            Shoes Build like NeVeR before 
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11 flex flex-wrap gap-4">
            <ButtonClick label ="Shop Now" iconURL = {arrowRight} />
        </div>
        </div>          
    </section>
  )
}

export default SpecialOffer