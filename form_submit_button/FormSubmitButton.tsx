import './FormSubmitButton.css'

type FormSubmitButtonProps = {
    button_height: number,
    button_width: number,
    button_color: string,
    placeholder: string,
}


export default function FormSubmitButton({button_height, button_width, button_color, placeholder}: FormSubmitButtonProps) {

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