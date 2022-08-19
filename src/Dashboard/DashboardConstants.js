export const EDIT_TEXT = "edit_note"
export const DELETE_TEXT = "delete"
export const DOWNLOAD_TEXT = "download"

export const INCIDNT_TABLE_COLUMNS = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'formType', headerName: 'Report Type', width: 170 },
    { field: 'enteredBy', headerName: 'Entered By', width: 170 },
    { field: 'facility', headerName: 'Facility', width: 170 },
    { field: 'departmentsInvolved', headerName: 'Departments Involved', width: 170 },
    { field: 'status', headerName: 'Status', width: 170 },
    { field: 'eventDate', headerName: 'Submitted Date', width: 170 },
    { field: 'LastSubmittedDate', headerName: 'Last Updated Date', width: 170 },
  ];

  export const INCIDENT_TABLE_ACTION_ICONS = [
    {
        icon: "edit_note",
        style: {
            fontSize:30
        },
        hoverColor: "#0068c3",
    },
    {
        icon: "delete",
        style: {
            fontSize:20
        },
        hoverColor: "#cd0000",
    },
    {
        icon: "download",
        style: {
            fontSize:25
        },
        hoverColor: "#0068c3",
    }
  ]