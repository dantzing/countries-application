import React, { useEffect, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import ImgRenderer from './ImgRenderer';
import CountryDetails from './CountryDetails';

const CountriesGrid = () => {
    const gridRef = useRef(null);

    const columnDefs = [
      { headerName: 'Common Name', valueGetter: params => params.data.name.common },
      { headerName: 'Population', field: 'population' }, // TODO format nicely
      { 
        headerName: 'First Language', 
        valueGetter: params => {
          const languages = params.data.languages;
          const firstLanguageKey = languages ? Object.keys(languages)[0] : null;
          return firstLanguageKey ? languages[firstLanguageKey] : 'N/A';
        }
      },
      { 
        headerName: 'Currency', 
        valueGetter: params => {
          const currencies = params.data.currencies;
          const firstCurrency = currencies ? Object.values(currencies)[0] : null;
          return firstCurrency ? firstCurrency.name : '';
        }
      },
      { 
        headerName: 'Flag', 
        field: 'flags.png',
        cellRenderer: ImgRenderer
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
    let gridApi;
    const onGridReady = (params) => {
      gridApi = params.api
    }
    const [selectedCountry, setSelectedCountry] = useState(null);
    const onSelectionChanged = () => {
      const selectedNodes = gridApi.getSelectedNodes();
      setSelectedCountry(selectedNodes[0].data);
      console.debug('CountriesGrid.onSelectionChanged selectedNodes=');
      console.debug(selectedNodes);
    };
    const gridOptions = {
      rowSelection: 'single',
      onSelectionChanged: onSelectionChanged
    };

    return (
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          gridOptions={gridOptions}
          onGridReady={onGridReady}>
        </AgGridReact>
        <CountryDetails countryData={selectedCountry}/>
      </div>
    );
  };

export default CountriesGrid