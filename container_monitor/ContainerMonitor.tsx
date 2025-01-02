
type container_monitor_props = {
    height: number,
    width: number,
    color: string,
    bgcolor: string,
    current_status: string,
}


export default function ContainerMonitor(
    {
        height,
        width,
        color,
        bgcolor,
        current_status,
    }: container_monitor_props
) {
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
                fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;',

            }}
        >
            <div className="container_name"
                style={{
                    gridRow: '1 / 3',
                    gridColumn : '1 / 5',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} 
            >
                container deamon
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
                5 min
            </div>

        </div>
    )
}