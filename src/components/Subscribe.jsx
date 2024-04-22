import ButtonClick from "../components/ButtonClick"

const Subscribe = () => {
  return (<section className="max-container flex items-center max-lg:flex-col gap-40" id = "contact us">
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up For <span className="text-coral-red"> Updates and NewsLetter </span></h3>
        <ButtonClick label = "Subscribe"/>
  </section>)
}

export default Subscribe