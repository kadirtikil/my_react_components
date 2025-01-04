import { ContainerContext } from "../../../contexts/ContainerContext"
import { useContext, useEffect } from "react"


export default function ContainerModal() {

    
    const containerContextData = useContext(ContainerContext)
    
    useEffect(() => {
        console.log(containerContextData)
    })
    
    
    return (
        <>
            <div className="
            bg-white h-[70vh] w-[30vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg
            grid grid-cols-2 grid-rows-7
            ">
                <h1 className="col-start-1 col-end-3 row-start-1 row-end-2 flex justify-center items-center">{containerContextData.Image}</h1>
                <h1 className="col-start-1 col-end-3 row-start-2 row-end-3 flex justify-center items-center">{containerContextData.ImageID}</h1>
                
                <h1 className="col-start-1 col-end-3 row-start-3 row-end-4 flex justify-center items-center">{containerContextData.Id}</h1>
                
                <h1 className="col-start-1 col-end-3 row-start-4 row-end-5 flex justify-center items-center">{containerContextData.Names}</h1>
                <h1 className="col-start-1 col-end-3 row-start-5 row-end-6 flex justify-center items-center">{containerContextData.Ports}</h1>
                <h1 className="col-start-1 col-end-3 row-start-6 row-end-7 flex justify-center items-center">{containerContextData.State}</h1>
                <h1 className="col-start-1 col-end-3 row-start-7 row-end-8 flex justify-center items-center">{containerContextData.Status}</h1>
                
                {/**<h1 className="col-start-1 col-end-3 row-start-1 row-end-2 flex justify-center items-center">{modal_data.Labels}</h1>
                <h1 className="col-start-1 col-end-3 row-start-2 row-end-3 flex justify-center items-center">{modal_data.NetworkSettings}</h1>
                <h1 className="col-start-1 col-end-3 row-start-3 row-end-4 flex justify-center items-center">{containerContextData.Mounts}</h1>**/}
                
            </div>
        </>
    )
}






