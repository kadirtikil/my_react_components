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


export default function KDRMessageForm({height, width}: KDRMessageForm) {
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
            className="h-[90%] lg:w-[35vw] w-[60vw] bg-black border-blue-700 border-2 rounded-xl grid grid-cols-1 grid-rows-8"
        >
            <div 
                className="row-start-1 col-start-1 row-end-2 col-end-2 flex justify-center items-center"
            >
                <KDRFormInputText value={formData.name} height={height / 15} width={width} fontSize={25} color="yellow" placeholder="name"/>
            </div>
            <div 
                className="row-start-2 col-start-1 row-end-3 col-end-2 flex justify-center items-center"
            >
                <KDRFormInputText value={formData.email} height={height / 15} width={width} fontSize={25} color="yellow" placeholder="email"/>
            </div>
            <div 
                className="row-start-3 col-start-1 row-end-4 col-end-2 flex justify-center items-center"
            >
                <KDRFormInputText value={formData.phone} height={height / 15} width={width} fontSize={25} color="yellow" placeholder="phone number"/>
            </div>

            <div 
                className="row-start-4 col-start-1 row-end-8 col-end-2 flex justify-center items-center"
            >
                <KDRFormInputBigText height={height / 4} width={width} fontSize={25} color="yellow" placeholder="Message"/>
            </div>


            <div 
                className="row-start-8 col-start-1 row-end-9 col-end-2 flex justify-center items-center"
            >
                <KDRFormSubmitButton button_height={50} button_width={150} button_color="cyan" placeholder="submit" />
            </div>
        </form>
            
    )
}