import './FormInputBigText.css'

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
            className="input" 
            name="text" 
            style={{
                height: height + 'vh',
                width: width + 'vw',
                color: color,
                fontSize: fontSize, 
                resize: 'none',
            }}    
            
        />
    )
}