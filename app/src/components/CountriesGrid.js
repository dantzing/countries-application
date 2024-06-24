import React, { useEffect, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const CountriesGrid = () => {
    const gridRef = useRef(null);

    const columnDefs = [
      { headerName: 'Name', field: 'commonName' },
      { headerName: 'Language', field: 'firstLanguage' }
    ];
  
    const [rowData, setRowData] = useState([]);
  
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all') // Replace with your data source
      .then(response => response.json())
      .then(data => {
        // Transform the data to extract common name and first language
        const transformedData = data.map(country => {
          const commonName = country.name.common;
          const languages = country.languages;
          const firstLanguageKey = languages ? Object.keys(languages)[0] : null;
          const firstLanguage = firstLanguageKey ? languages[firstLanguageKey] : 'N/A';

          return {
            commonName,
            firstLanguage
          };
        });

        setRowData(transformedData);
      });
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