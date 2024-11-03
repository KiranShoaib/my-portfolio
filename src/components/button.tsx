interface typeOfProp{
   text: string
}

function Button(props:typeOfProp){
    return(
       <div className="pt-10">
        <button className="text-[#d58952] border border-[#d58952] hover:text-white hover:bg-[#d58952] w-36 h-12 rounded">
           { props.text}
        </button>
       </div>
    )
}

export default Button