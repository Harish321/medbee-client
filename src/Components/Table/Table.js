import { DataGrid } from '@mui/x-data-grid';

export default function(props){
    let style = {
        root: {
            height: 650, 
            width: '100%',
            // margin: "50px 0px",
            // border: "1px solid #cccccc"
        }
    }
     return (
        <div style={style.root}>
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                pageSize={props.pageSize}
                rowsPerPageOptions={props.rowsPerPageOptions}
            />
        </div>
     )
}