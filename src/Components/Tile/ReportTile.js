import { RISK_THRESHOLD_ORANGE, RISK_THRESHOLD_RED, RISK_THRESHOLD_YELLOW } from "../../Constants/Constants"

export default function ReportTile(props) {
    let style = {
        root: {
            minWidth: 375,
            border: "1px solid #cccccc",
            borderRadius: 10,
            boxShadow: "green 1px 1px 10px 1px",
            padding: 10,
        }
    }
    style = {
        ...style,
        ...props.style
    }
    if(props.count >= RISK_THRESHOLD_RED){
        style.root = {
            ...style.root,
            boxShadow: "red  1px 1px 10px 1px"
        }   
    } else if(props.count >= RISK_THRESHOLD_ORANGE){
        style.root = {
            ...style.root,
            boxShadow: "5px 5px 5px orange"
        }   
    } else if(props.count >= RISK_THRESHOLD_YELLOW){
        style.root = {
            ...style.root,
            boxShadow: "5px 5px 5px #b3b334"
        }   
    } 
    return (
        <div style={style.root}>
            <div><b>{props.reportType}</b></div>
            <div><b>Incident Count:</b> {props.count}</div>
            <div><b>Last Reported:</b> {props.lastReported}</div>
        </div>
    )
}