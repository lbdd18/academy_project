import { DataGrid } from '@mui/x-data-grid';

const MuiDataGrid = ({ rows, columns }: any) => {
    console.log(rows)
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </div>
    )
}

export default MuiDataGrid