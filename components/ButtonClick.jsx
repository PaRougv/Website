const ButtonClick = (props) => {
  return (
    <button className = "flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
        {props.label}
        {props.iconURL && <img src = {props.iconURL} alt = "rightarrow" className="ml-2 rounded-full w-5 h-5"/>}
    </button>
  )
}

export default ButtonClick