import Table from "../Components/Table/Table";
import FullWidthTabs from "../Components/tabs/FullWidthTabs";
import ReportTile from "../Components/Tile/ReportTile"
import { getIncidentReportData, navigateToEditIncidentScreen } from "./DashboardActions";
import ActionIcon from "../Components/ActionIcon";
import { INCIDENT_TABLE_ACTION_ICONS, INCIDNT_TABLE_COLUMNS } from "./DashboardConstants";
import { EDIT_TEXT, DELETE_TEXT, DOWNLOAD_TEXT } from "./DashboardConstants";
import { useNavigate } from "react-router-dom";

export default function Dashboard(props){
    let navigate = useNavigate();

    const handleIncidentActionCellClick = (params, event, details) => {
        switch(event.target.innerText){
            case EDIT_TEXT: navigateToEditIncidentScreen(params, navigate); break;
            case DELETE_TEXT: navigateToEditIncidentScreen(params, event, details); break;
            case DOWNLOAD_TEXT: navigateToEditIncidentScreen(params, event, details); break;
        }
    }
    
    const style = {
        root: {
            "marginLeft": 100
        },
        reportAggregate: {
            "display": "flex",
            "gap": 10
        },
        reporttable: {}
    }

    const reportAggregateData = [
        {
            reportType: "Variance Safety",
            count: 3,
            lastReported: "2022-07-12 12:00:00 AM"
        },
        {
            reportType: "Risk",
            count: 0,
            lastReported: "2022-07-12 12:00:00 AM"
        },
        {
            reportType: "Medication Safety",
            count: 9,
            lastReported: "2022-07-12 12:00:00 AM"
        },
        {
            reportType: "Surgical",
            count: 50,
            lastReported: "2022-07-12 12:00:00 AM"
        }
    ]
    
    return (
        <div style={style.root}>
            <div style={style.reportAggregate}>
                {reportAggregateData.map((reportData) => {
                    return <ReportTile {...reportData}/>
                })}
            </div>
            <div style={style.reporttable}>
                <FullWidthTabs title={"Incident Reports"}>
                    <Table
                        action={getIncidentReportData} 
                        columns={[...INCIDNT_TABLE_COLUMNS, {
                            field: 'actions',
                            headerName: '',
                            description: 'This column has a value getter and is not sortable.',
                            sortable: false,
                            width: 170,
                            renderCell: () => {
                              return (
                                <div>
                                  {INCIDENT_TABLE_ACTION_ICONS.map((iconProps) => 
                                        <ActionIcon {...iconProps}></ActionIcon>  
                                  )}
                                </div>
                            )},
                          }]}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        onCellClick={handleIncidentActionCellClick}/>
                </FullWidthTabs>
            </div>
        </div>
    )
}