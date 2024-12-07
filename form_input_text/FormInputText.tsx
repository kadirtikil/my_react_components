import './FormInputText.css'

type FormInputTextProps = {
    height: number, 
    width: number, 
    placeholder: string,
    color: string,
}

export default function KDRFormInputText({height, width, placeholder, color}: FormInputTextProps) {

    return (
        <input 
            placeholder={placeholder} 
            className="input" 
            name="text" 
            type="text"
            style={{
                height: height,
                width: width,
                color: color,
                fontSize: height / 2, 
            }}    
            
        />
    )
}