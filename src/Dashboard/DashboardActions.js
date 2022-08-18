import Axios from "axios"
import store from '../store'
import { BASE_API_URI, GET_ALL_INCIDENTS_API } from "../Constants/Constants";
import { commonActions } from "../store/CommonStore";

const dispatch = store.dispatch

export const getIncidentReportData = (props, isStoreUpdated) => {
    if(props && !isStoreUpdated){
        Axios.get(BASE_API_URI + GET_ALL_INCIDENTS_API).then((response) => {
            if(response.status == 200){
                const tempReportList = response.data.map((elem) => {
                    elem.status = "Submitted"
                    switch(elem.formType){
                        case "Risk": return {...elem, id: "RISK"+elem.id};
                        case "Variance": return {...elem, id: "VAR"+elem.id};
                        case "Medication": return {...elem, id: "MED"+elem.id};
                        case "Surgical": return {...elem, id: "SUR"+elem.id};
                    }
                })
                dispatch(commonActions.setAllIncidentList(tempReportList))
                props.setRowList(tempReportList)
            }
        })
    }
}