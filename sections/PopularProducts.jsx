import { products } from "../constants" 
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (<section id = "products" className="max-container max-sm:mt-12">
    <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
      <p className="lg:max-w-lg mt-2 text-slate-gray font-montserrat">Shoes , They are to be worn in the Foot xDDD</p>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={products.name} {...product} />
        ))}
      </div>
    </div>
  </section>)
}

export default PopularProducts
