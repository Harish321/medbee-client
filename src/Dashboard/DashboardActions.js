import Axios from "axios"
import store from '../store'
import { BASE_API_URI, DASHBOARD_PAGE_URI, FORM_API_URI, GET_ALL_INCIDENTS_API, HOME_PAGE_URI, MEDICATION_FORM_TYPE, MEDICATION_PAGE_URI, REPORT_COUNT_API, RISK_FORM_TYPE, RISK_PAGE_URI, SURGICAL_FORM_TYPE, SURGICAL_PAGE_URI, VARIANCE_FORM_TYPE, VARIANCE_PAGE_URI } from "../Constants/Constants";
import { commonActions } from "../store/CommonStore";

const dispatch = store.dispatch

export const getIncidentReportData = () => {
    return Axios.get(BASE_API_URI + GET_ALL_INCIDENTS_API).then((response) => {
        if(response.status == 200){
           return response.data.map((elem) => {
                elem.status = "Submitted"
                switch(elem.formType){
                    case RISK_FORM_TYPE: return {...elem, formId: "RIS"+elem.id};
                    case VARIANCE_FORM_TYPE: return {...elem, formId: "VAR"+elem.id};
                    case MEDICATION_FORM_TYPE: return {...elem, formId: "MED"+elem.id};
                    case SURGICAL_FORM_TYPE: return {...elem, formId: "SUR"+elem.id};
                }
            })
            // dispatch(commonActions.setAllIncidentList(tempReportList))
            // props.setRowList(tempReportList)
        }
    })
}

export const navigateToEditIncidentScreen = (params, navigate) => {
    if(params){
        const incidentID = "/"+params.row.id
        switch(params.row.formType){
            case RISK_FORM_TYPE: navigate(RISK_PAGE_URI+incidentID); break;
            case VARIANCE_FORM_TYPE: navigate(VARIANCE_PAGE_URI+incidentID); break;
            case MEDICATION_FORM_TYPE: navigate(MEDICATION_PAGE_URI+incidentID); break;
            case SURGICAL_FORM_TYPE: navigate(SURGICAL_PAGE_URI+incidentID); break;
        }
    }
}
export const deleteIncident = (params,navigate) =>{
    return Axios.delete(BASE_API_URI+`${FORM_API_URI}${params.row.formType}/${params.row.id}`).then(()=>{
        navigate(HOME_PAGE_URI);
    })
}

export const getReportCount = (props) =>{
    Axios.get(BASE_API_URI+REPORT_COUNT_API).then((response)=>{
        props.setReportAggregateData(response.data)
    })
}
