import React, { useEffect, useRef } from "react";
import Select, { components } from 'react-select'
function SelectCustom({
    options,
    label = "",
    value,
    type = "",
    placeholder = false
}) {
    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <i style={{ fontSize: "20px" }} class="now-ui-icons ui-1_zoom-bold"></i>
            </components.DropdownIndicator>
        );
    };
    if (type === "search")
        return (
            <Select
                options={options}
                value={value ?? null}
                className="react-select-container"
                classNamePrefix="react-select"
                components={{ IndicatorSeparator: () => { }, DropdownIndicator }}
                placeholder={placeholder || "Nhập để tìm kiếm..."}
            />
        );
    return (
        <div>
            {
                !!label && (
                    <h5 className="mb-0">
                        <label>{label}</label>
                    </h5>
                )
            }
            <Select
                options={options}
                value={value ?? null}
                placeholder={placeholder}
            />
        </div>
    )
}

export default SelectCustom;