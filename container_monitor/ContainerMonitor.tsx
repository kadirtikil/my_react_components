import { useContext, useState } from "react"

import { Modal, Button } from "@mui/material"

import ContainerModal from "./ContainerModal"
import { ContainerInfo } from "./TypesContainerJSON";
import { ContainerContext } from "../../../contexts/ContainerContext";

export type container_monitor_props = {
    height: number,
    width: number,
    color: string,
    bgcolor: string,
    current_status: string,
    modal_data: ContainerInfo,
}

export default function ContainerMonitor(
    {
        height,
        width,
        color,
        bgcolor,
        current_status,
    }: container_monitor_props,
) {

    
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    
    const containerContextData = useContext(ContainerContext)

    return (
        <div 
            className="container_monitor_container"
            style={{
                height: height + 'vh',
                width: width + 'vw',
                backgroundColor: bgcolor,
                display: "grid",
                gridTemplateRows: 'repeat(4,' + height/4 + 'vh)',
                gridTemplateColumns: 'repeat(4,' + width/4 + 'vw)',
                border: '5px solid ' + current_status,
                borderRadius: '7px',
                color: color,
                fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
            }}
        >
            <div className="container_name"
                style={{
                    gridRow: '1 / 3',
                    gridColumn : '1 / 5',
                    padding: '5px',
                    
                }} 
            >
                {containerContextData.Image}
            </div>

            <div className="last_checked"
                style={{
                    gridRow: '3 / 5',
                    gridColumn : '1 / 5',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} 
            >
                {containerContextData.Status}
            </div>

            <div
                style={{
                    gridRow: '1 / 2',
                    gridColumn : '3 / 5',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} 
            >
                {containerContextData.State}
                <Button onClick={handleOpen}>Open</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="" >
                    <ContainerModal/>
                </div>
            </Modal>

        </div>
    )
}