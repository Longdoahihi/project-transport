import React, { useEffect, useRef } from "react";
import Select, { components } from 'react-select';
import 'assets/css/components/react-select.css';
function SelectCustom({
    options,
    label = "",
    subLabel = "",
    labelWidth = 120,
    maxWidth,
    row = false,
    type = "",
    placeholder = false,
    isRequired = false,
    onChange = () => {},
    value = null
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
                placeholder={"Nhập để tìm kiếm..."}
            />
        );
    return (
        <div className="form-group"
            style={{
                display: row ? "flex" : undefined,
            }}
        >
            {
                !!label && (
                    <label className="mb-0 select-label"
                        style={{
                            minWidth: row ? labelWidth : undefined
                        }}
                    >{label}
                        {
                            isRequired && (<span style={{ color: 'red' }} >&nbsp;*</span>)
                        }
                        {
                            !!subLabel && (<span style={{ fontSize: 12, fontStyle: 'italic' }} >&nbsp;({subLabel})</span>)
                        }
                    </label>
                )
            }
            <Select
                options={options}
                value={value ?? null}
                placeholder={placeholder}
                className="react-select-container custom-react-select"
                classNamePrefix="react-select"
                onChange={onChange}
                styles={{
                    container : (baseStyles,state) => {
                        return {
                            ...baseStyles,
                            flex: 1,
                            minWidth: 120,
                            maxWidth: !!maxWidth ? maxWidth : undefined
                        }
                    }
                }}
            />
        </div>
    )
}

export default SelectCustom;