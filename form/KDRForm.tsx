// imports
import './KDRForm.css'


// import other components
import KDRFormInputText from "../form_input_text/FormInputText"
import KDRFormSubmitButton from "../form_submit_button/FormSubmitButton"

type KDRMessageForm = {
    height: number,
    width: number,
    bgcolor: string,
    border_color: string,
}


export default function KDRMessageForm({height, width, bgcolor, border_color}: KDRMessageForm) {



    return(
        <form action="" 
            className="KDRForm_Container"
            style={{
                height: height, 
                width: width,
                backgroundColor: bgcolor,
                border: '5px solid ' + border_color,
                borderRadius: '10px',
                display: 'grid',
                gridTemplateRows: 'repeat(6, ' + (height/6) + 'px)',
                gridTemplateColumns: width,
            }}
        >
            <div 
                className="KDRForm_text_name"
                style={{
                    gridRow: '1 / 2',
                    gridColumn: '1 / 2',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <KDRFormInputText height={height / 10} width={width} color="yellow" placeholder="name"/>
            </div>
            <div 
                className="KDRForm_text_email"
                style={{
                    gridRow: '2 / 3',
                    gridColumn: '1 / 2',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}    
            >
                <KDRFormInputText height={height / 10} width={width} color="orange" placeholder="email"/>
            </div>
            <div 
                className="KDRForm_text_phone"
                style={{
                    gridRow: '3 / 4',
                    gridColumn: '1 / 2',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}    
            >
                <KDRFormInputText height={height / 10} width={width} color="orange" placeholder="phone number"/>
            </div>

            <div 
                className="KDRForm_message"
                style={{
                    gridRow: '4 / 6',
                    gridColumn: '1 / 2',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}    
            >
                <KDRFormInputText height={height / 10} width={width} color="orange" placeholder="Message"/>
            </div>


            <div 
                className="KDRForm_submit_button"
                style={{
                    gridRow: '6 / 7',
                    gridColumn: '1 / 2',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}    
            >
                <KDRFormSubmitButton button_height={50} button_width={150} button_color="cyan" placeholder="submit"/>
            </div>
        </form>
            
    )
}