import ButtonClick from "../components/ButtonClick.jsx"
import { arrowRight } from "../assets/icons"
import { statistics ,shoes } from "../constants/index.js"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard.jsx"
import React,{useState} from "react"

const HerosectionBar = () => {
    const [bigShoeImage , setbigShoeImage] = useState(bigShoe1)

  return (<section id = "home" className = "w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
    <div className = "relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className = "text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className = "mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
            <span className = "xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
            <br />
            <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className = "font-montserrat text-[20px] text-slate-gray mt-10 mb-10">Discover stylish Nike arrivals , quality comfort , and innovation for your active life</p>
        <ButtonClick label= 'Shop Now' iconURL = {arrowRight}/>
        <div className = "flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stats) => (
                <div key={stats.label}>
                    <p className="text-4xl font-bold font-palanquin">{stats.value}</p>
                    <p className="font-montserrat text-slate-gray text-xl">{stats.label}</p>
                </div>
                
            ))}
        </div>
    </div>
    <div className="realtive flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center bg-cover">
        <img src ={bigShoeImage} alt="ShoeCollection" width ={610} height={500} className="relative z-10 object-contain"></img>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[-3900px]">
            {shoes.map((shoe) =>(
                <div key={shoe}>
                    <ShoeCard imgURL={shoe} changeBigShoeImage = {(shoe) => setbigShoeImage(shoe)} bigShoeImage = {bigShoeImage}/>
                </div>
            ))}
        </div>
    </div>
  </section>)
}

export default HerosectionBar