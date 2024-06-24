import React, { useEffect, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const CountriesGrid = () => {
    const gridRef = useRef(null);

    const columnDefs = [
      { headerName: 'Common Name', valueGetter: params => params.data.name.common },
      { 
        headerName: 'First Language', 
        valueGetter: params => {
          const languages = params.data.languages;
          const firstLanguageKey = languages ? Object.keys(languages)[0] : null;
          return firstLanguageKey ? languages[firstLanguageKey] : 'N/A';
        }
      }
    ];
  
    const [rowData, setRowData] = useState([]);
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
          setRowData(data);
        })
        .catch(error => console.error('Error fetching data:', error));;
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