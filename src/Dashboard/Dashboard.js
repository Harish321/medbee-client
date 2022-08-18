import Table from "../Components/Table/Table";
import FullWidthTabs from "../Components/tabs/FullWidthTabs";
import ReportTile from "../Components/Tile/ReportTile"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import DownloadIcon from '@mui/icons-material/Download'
import { getIncidentReportData } from "./DashboardActions";

export default function Dashboard(props){

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
        { field: 'enteredBy', headerName: 'Entered By', width: 170 },
        { field: 'facility', headerName: 'Facility', width: 170 },
        { field: 'departmentsInvolved', headerName: 'Departments Involved', width: 170 },
        { field: 'status', headerName: 'Status', width: 170 },
        { field: 'eventDate', headerName: 'Submitted Date', width: 170 },
        { field: 'LastSubmittedDate', headerName: 'Last Updated Date', width: 170 },
        {
          field: 'Edit',
          headerName: '',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 30,
          valueGetter: (params) =>
            'Edit',
        },
        {
            field: 'Delete',
            headerName: '',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 30,
            valueGetter: (params) =>
              'Delete',
          },
          {
            field: 'Download',
            headerName: '',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 60,
            valueGetter: (params) =>
              'Download',
          },
      ];
      function handleCellClick(params, event, details){
        console.log("cicked")
      }
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
                        action={getIncidentReportData} 
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        onCellClick={handleCellClick}/>
                </FullWidthTabs>
            </div>
        </div>
    )
}