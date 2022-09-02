import Table from "../Components/Table/Table";
import FullWidthTabs from "../Components/tabs/FullWidthTabs";
import ReportTile from "../Components/Tile/ReportTile"
import { deleteIncident, getIncidentReportData, navigateToEditIncidentScreen } from "./DashboardActions";
import ActionIcon from "../Components/ActionIcon";
import { INCIDENT_TABLE_ACTION_ICONS, INCIDNT_TABLE_COLUMNS } from "./DashboardConstants";
import { EDIT_TEXT, DELETE_TEXT, DOWNLOAD_TEXT } from "./DashboardConstants";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard(props){
    let navigate = useNavigate();
    const [tableData,setTableData] = useState([]);
    const handleIncidentActionCellClick = async (params, event, details) => {
        switch(event.target.innerText){
            case EDIT_TEXT: navigateToEditIncidentScreen(params, navigate); break;
            case DELETE_TEXT: {
                await deleteIncident(params,navigate); 
                setTableData(await getIncidentReportData())
            }; break;
            case DOWNLOAD_TEXT: navigateToEditIncidentScreen(params, event, details); break;
        }
    }
    
    const style = {
        root: {
            margin: "0 50px 0 100px"
        },
        reportAggregate: {
            display: "flex",
            gap: 20,
            width: "100%",
            flexWrap: "wrap",
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
    useEffect(()=>{
        getIncidentReportData().then((data)=>{
            console.log(data);
            setTableData(data);
        })
    },[])
    
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
                        data={tableData}
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