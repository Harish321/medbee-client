import Table from "../Components/Table/Table";
import FullWidthTabs from "../Components/tabs/FullWidthTabs";
import ReportTile from "../Components/Tile/ReportTile"

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
        { field: 'id', headerName: 'ID', width: 30 },
        { field: 'reportType', headerName: 'Report Type', width: 170 },
        { field: 'eventType', headerName: 'Event Type', width: 170 },
        { field: 'patientName', headerName: 'Patient Name', width: 170 },
        { field: 'patientId', headerName: 'Patient ID', width: 170 },
        { field: 'status', headerName: 'Status', width: 170 },
        { field: 'submittedDate', headerName: 'Submitted Date', width: 170 },
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
      
      const rows = [
        { id: '1', reportType: 'Risk', eventType: 'Ambulating', patientName: 'John Doe', patientId: '1234567890', status:'Submitted', submittedDate: '2022-07-12', lastUpdatedDate: '2022-07-12' },
        { id: '2', reportType: 'Risk', eventType: 'Ambulating', patientName: 'John Doe', patientId: '1234567890', status:'Submitted', submittedDate: '2022-07-12', lastUpdatedDate: '2022-07-12' },
        { id: '3', reportType: 'Risk', eventType: 'Ambulating', patientName: 'John Doe', patientId: '1234567890', status:'Submitted', submittedDate: '2022-07-12', lastUpdatedDate: '2022-07-12' },
        { id: '4', reportType: 'Risk', eventType: 'Ambulating', patientName: 'John Doe', patientId: '1234567890', status:'Submitted', submittedDate: '2022-07-12', lastUpdatedDate: '2022-07-12' },
        { id: '5', reportType: 'Risk', eventType: 'Ambulating', patientName: 'John Doe', patientId: '1234567890', status:'Submitted', submittedDate: '2022-07-12', lastUpdatedDate: '2022-07-12' },
        { id: '6', reportType: 'Risk', eventType: 'Ambulating', patientName: 'John Doe', patientId: '1234567890', status:'Submitted', submittedDate: '2022-07-12', lastUpdatedDate: '2022-07-12' },
        { id: '7', reportType: 'Risk', eventType: 'Ambulating', patientName: 'John Doe', patientId: '1234567890', status:'Submitted', submittedDate: '2022-07-12', lastUpdatedDate: '2022-07-12' },
        { id: '8', reportType: 'Risk', eventType: 'Ambulating', patientName: 'John Doe', patientId: '1234567890', status:'Submitted', submittedDate: '2022-07-12', lastUpdatedDate: '2022-07-12' },
        { id: '9', reportType: 'Risk', eventType: 'Ambulating', patientName: 'John Doe', patientId: '1234567890', status:'Submitted', submittedDate: '2022-07-12', lastUpdatedDate: '2022-07-12' },
        { id: '10', reportType: 'Risk', eventType: 'Ambulating', patientName: 'John Doe', patientId: '1234567890', status:'Submitted', submittedDate: '2022-07-12', lastUpdatedDate: '2022-07-12' },
      ];
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
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}/>
                </FullWidthTabs>
            </div>
        </div>
    )
}