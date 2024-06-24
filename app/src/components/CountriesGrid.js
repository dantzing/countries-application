import React, { useEffect, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const CountriesGrid = () => {
    const gridRef = useRef(null);

    const columnDefs = [
      { headerName: 'Name', field: 'name.common' }
    ];
  
    const [rowData, setRowData] = useState([]);
  
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all') // Replace with your data source
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
      .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}>
        </AgGridReact>
      </div>
    );
  };

export default CountriesGrid