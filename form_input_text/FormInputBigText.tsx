type KDRFormInputBigText = {
    height: number, 
    width: number,
    fontSize: number,
    color: string,
    placeholder: string,
}

export default function KDRFormInputBigText({height, width, fontSize, color, placeholder}: KDRFormInputBigText) {

    return (
        <textarea 
            placeholder={placeholder} 
            className="
                h-[100%] w-[90%] bg-transparent placeholder:text-DeepYellow text-white text-sm border-4 border-DeepYellow rounded-md 
                px-3 py-2 transition duration-300 ease focus:outline-none focus:border-red hover:border-yellow shadow-sm focus:shadow
                md:text-4xl
                "
            name="text" 
            
        />
    )
}