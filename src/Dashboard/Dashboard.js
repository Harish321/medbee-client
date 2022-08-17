import Table from "../Components/Table/Table";
import FullWidthTabs from "../Components/tabs/FullWidthTabs";
import ReportTile from "../Components/Tile/ReportTile"
import Axios from "axios"
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import DownloadIcon from '@mui/icons-material/Download'

export default function Dashboard(props){

    const [reportList, setReportList] = useState([]);

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
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'formType', headerName: 'Report Type', width: 170 },
        { field: 'eventType', headerName: 'Event Type', width: 170 },
        { field: 'patientName', headerName: 'Patient Name', width: 170 },
        { field: 'patientId', headerName: 'Patient ID', width: 170 },
        { field: 'status', headerName: 'Status', width: 170 },
        { field: 'eventDate', headerName: 'Submitted Date', width: 170 },
        { field: 'lastUpdatedDate', headerName: 'Last Updated Date', width: 170 },
        {
          field: 'actions',
          headerName: 'Actions',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 260,
          valueGetter: (params) =>
            `Edit, Delete, Download`,
        },
      ];
    useEffect(()=>{
    Axios.get("http://15.207.7.212:3003/report/getAllForms").then((response) => {
        if(response.status == 200){
            const tempReportList = response.data.map((elem) => {
                switch(elem.formType){
                    case "Risk": return {...elem, id: "RISK"+elem.id};
                    case "Variance": return {...elem, id: "VAR"+elem.id};
                    case "Medication": return {...elem, id: "MED"+elem.id};
                    case "Surgical": return {...elem, id: "SUR"+elem.id};
                }
            })
            setReportList(tempReportList);
        }
        })
    },[props])
     
      
    return (
        <div style={style.root}>
            <div style={style.reportAggregate}>
                {reportAggregateData.map((reportData) => {
                    return <ReportTile {...reportData}/>
                })}
            </div>
            <div style={style.reporttable}>
                <FullWidthTabs title={"Patient Reports"}>
                    <Table 
                        rows={reportList}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}/>
                </FullWidthTabs>
            </div>
        </div>
    )
}