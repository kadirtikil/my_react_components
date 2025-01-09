type KDRFormSubmitButtonProps = {
    button_height: number,
    button_width: number,
    button_color: string,
    placeholder: string,
}


export default function KDRFormSubmitButton({button_height, button_width, button_color, placeholder}: KDRFormSubmitButtonProps) {

    return(
        <div className="text">
            <button className="
                relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 
                rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 
                hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
                h-[5vh] sm:w-[35vw] lg:w-[20vw] md:text-4xl
                ">
            {placeholder}
            </button>
        </div>
    )

}