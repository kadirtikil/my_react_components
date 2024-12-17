import './FormInputText.css'

type FormInputTextProps = {
    height: number, 
    width: number, 
    fontSize: number,
    placeholder: string,
    color: string,
    value: string,
}

export default function KDRFormInputText({height, width, fontSize, placeholder, color, value}: FormInputTextProps) {

    return (
        <input 
            placeholder={placeholder} 
            className="input" 
            name="text" 
            type="text"
            style={{
                height: height + 'vh',
                width: width + 'vw',
                color: color,
                fontSize: fontSize, 
            }}    
            defaultValue={value}
            
        />
    )
}