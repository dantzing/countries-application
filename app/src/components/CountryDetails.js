import React from "react";

const CountryDetails = ({ countryData }) => {
    if (countryData == null) return '';
    else
    return (<div>
        Common name={countryData.name.common}
    </div>
    );
};

export default CountryDetails;