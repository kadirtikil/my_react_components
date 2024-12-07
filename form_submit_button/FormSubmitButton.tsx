import './FormSubmitButton.css'

type KDRFormSubmitButtonProps = {
    button_height: number,
    button_width: number,
    button_color: string,
    placeholder: string,
}


export default function KDRFormSubmitButton({button_height, button_width, button_color, placeholder}: KDRFormSubmitButtonProps) {

    return(
        <div className="text">
            <button 
                style={{
                    height: button_height, 
                    width: button_width, 
                    color: button_color, 
                    fontSize: button_height / 2,
                }}
                className='button'
                id='text'
            >
                {placeholder}                
            </button>
        </div>
    )

}