import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

export default function(props){
    const [rowList, setRowList] = useState(props.rows?props.rows:[]);

    const componentState = {
        ...props,
        rowList: rowList,
        setRowList: setRowList
    }
    useEffect(() => {
        if(props.action){
            props.action(componentState, false)
        }
    },[])
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
                rows={rowList}
                columns={props.columns}
                pageSize={props.pageSize}
                rowsPerPageOptions={props.rowsPerPageOptions}
            />
        </div>
     )
}