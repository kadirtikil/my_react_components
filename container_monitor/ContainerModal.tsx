import { ContainerContext } from "../../../contexts/ContainerContext"
import { useContext, useEffect, useState } from "react"
import { setColorOfState } from "../../../services/ContainerStatusColor"


export default function ContainerModal() {

    
    const containerContextData = useContext(ContainerContext)

    const handleClickImageID = () => {
        navigator.clipboard.writeText(containerContextData.ImageID)

    }    

    const handleClickContainerID = () => {
        navigator.clipboard.writeText(containerContextData.Id)

    }

    const [innerState, setInnerState] = useState('white')

    useEffect(() => {
        setInnerState(setColorOfState(containerContextData.State))
    })

    return (
        <>
            <div className="
            bg-black text-white h-[30vh] w-[20vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg
            grid grid-cols-2 grid-rows-3 
            "
            style={{border:'10px solid ' + innerState}}
            >
                <h1 className="col-start-1 col-end-3 row-start-1 row-end-2 flex justify-center items-center 
                    text-xl font-bold
                ">{containerContextData.Image}</h1>
                
                <h1 onClick={handleClickImageID} className="col-start-1 col-end-2 row-start-2 row-end-3 flex justify-center items-center
                    cursor-pointer hover:text-yellow-500
                ">Copy Image ID</h1>
                
                <h1 onClick={handleClickContainerID} className="col-start-2 col-end-3 row-start-2 row-end-3 flex justify-center items-center
                    cursor-pointer hover:text-yellow-500
                ">Copy Container ID</h1>

                <h1 className="col-start-1 col-end-3 row-start-3 row-end-4 flex justify-center items-center

                ">{containerContextData.Status}</h1>
                
                {/**<h1 className="col-start-1 col-end-3 row-start-1 row-end-2 flex justify-center items-center">{modal_data.Labels}</h1>
                <h1 className="col-start-1 col-end-3 row-start-2 row-end-3 flex justify-center items-center">{modal_data.NetworkSettings}</h1>
                <h1 className="col-start-1 col-end-3 row-start-3 row-end-4 flex justify-center items-center">{containerContextData.Mounts}</h1>**/}
                
            </div>
        </>
    )
}






