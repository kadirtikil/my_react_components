// imports
import './KDRForm.css'


// import other components
import KDRFormInputText from "../form_input_text/FormInputText"
import KDRFormSubmitButton from "../form_submit_button/FormSubmitButton"
import KDRFormInputBigText from '../form_input_text/FormInputBigText'
import { useState } from 'react'


// imports for form data




type KDRMessageForm = {
    height: number,
    width: number,
    bgcolor: string,
    border_color: string,
}


export default function KDRMessageForm({height, width, bgcolor, border_color}: KDRMessageForm) {
    // use one formData useState for all inputs. 
    // is best practice 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        msg: '',
    }); 


    const submitFormData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("submitted the form")
        // now get the values of the boxes and HTTP POST that jit to nodejs server cuh
        

    }

    
    return(
        <form onSubmit={submitFormData} action="" 
            className="KDRForm_Container"
            style={{
                height: height + 'vh', 
                width: width + 'vw',
                backgroundColor: bgcolor,
                border: '5px solid ' + border_color,
                borderRadius: '10px',
                display: 'grid',
                gridTemplateRows: 'repeat(6, ' + (height/6) + 'vh)',
                gridTemplateColumns: width + 'vw',
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
                <KDRFormInputText value={formData.name} height={height / 15} width={width} fontSize={25} color="yellow" placeholder="name"/>
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
                <KDRFormInputText value={formData.email} height={height / 15} width={width} fontSize={25} color="yellow" placeholder="email"/>
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
                <KDRFormInputText value={formData.phone} height={height / 15} width={width} fontSize={25} color="yellow" placeholder="phone number"/>
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
                <KDRFormInputBigText height={height / 4} width={width} fontSize={25} color="yellow" placeholder="Message"/>
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
                <KDRFormSubmitButton button_height={50} button_width={150} button_color="cyan" placeholder="submit" />
            </div>
        </form>
            
    )
}