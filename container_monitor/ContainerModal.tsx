import { ContainerInfo } from "./TypesContainerJSON"


export default function ContainerModal({modal_data}: {modal_data: ContainerInfo}) {

    return (
        <>
            <div className="
            bg-white h-[70vh] w-[30vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg
            grid grid-cols-2 grid-rows-7
            ">
                <h1 className="col-start-1 col-end-3 row-start-1 row-end-2 flex justify-center items-center">{modal_data.Image}</h1>

                <h2 className="col-start-1 col-end-3 row-start-2 row-end-3 flex justify-center items-center">{modal_data.Id}</h2>
                
            </div>
        </>
    )
}