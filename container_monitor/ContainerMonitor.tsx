import { useState } from "react"

import { Box, Modal, Typography, Button } from "@mui/material"

import ContainerModal from "./ContainerModal"

export type container_monitor_props = {
    height: number,
    width: number,
    color: string,
    bgcolor: string,
    current_status: string,
    title: string,
    state: string,
    status: string,
}



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    backgroundColor: 'white',
    };

export default function ContainerMonitor(
    {
        height,
        width,
        color,
        bgcolor,
        current_status,
        title,
        state,
        status,
    }: container_monitor_props
) {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
          
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
                cursor: 'pointer',
            }}
        >
            <div className="container_name"
                style={{
                    gridRow: '1 / 3',
                    gridColumn : '1 / 5',
                    padding: '5px',
                    
                }} 
            >
                {title}
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
                {status}
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
                {state}
                <Button onClick={handleOpen}>Open</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ContainerModal />
                </Box>
            </Modal>

        </div>
    )
}