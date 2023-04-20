import React from "react";
import Select from 'react-select'
function SelectCustom({
    options,
    value
}) {

    return (
        <Select
            options={options}
            value={value??null}
        />
    );
}

export default SelectCustom;