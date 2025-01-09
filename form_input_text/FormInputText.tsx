type FormInputTextProps = {
    height: number, 
    width: number, 
    fontSize: number,
    placeholder: string,
    color: string,
    value: string,
}

export default function KDRFormInputText({placeholder, value}: FormInputTextProps) {

    return (
        <input 
            placeholder={placeholder} 
            className="
                h-[80%] w-[90%] bg-transparent placeholder:text-DeepYellow text-white text-sm border-4 border-DeepYellow rounded-md 
                px-3 py-2 transition duration-300 ease focus:outline-none focus:border-red hover:border-yellow shadow-sm focus:shadow
                md:text-4xl
                "
            name="text" 
            type="text" 
            defaultValue={value}
            
        />
    )
}