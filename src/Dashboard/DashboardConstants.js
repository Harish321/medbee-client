export const EDIT_TEXT = "edit_note"
export const DELETE_TEXT = "delete"
export const DOWNLOAD_TEXT = "download"

export const INCIDNT_TABLE_COLUMNS = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'formType', headerName: 'Report Type', width: 100 },
    { field: 'enteredBy', headerName: 'Entered By', width: 150 },
    { field: 'facility', headerName: 'Facility', width: 100 },
    { field: 'departmentsInvolved', headerName: 'Departments Involved', width: 150 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'eventDate', headerName: 'Submitted Date', width: 120 },
    { field: 'LastSubmittedDate', headerName: 'Last Updated Date', width: 150 },
  ];

  export const INCIDENT_TABLE_ACTION_ICONS = [
    {
        icon: "edit_note",
        style: {
            fontSize:25
        },
        hoverColor: "#0068c3",
    },
    {
        icon: "delete",
        style: {
            fontSize:18
        },
        hoverColor: "#cd0000",
    },
    {
        icon: "download",
        style: {
            fontSize:20
        },
        hoverColor: "#0068c3",
    }
  ]