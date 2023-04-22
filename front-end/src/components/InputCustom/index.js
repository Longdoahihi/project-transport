import classNames from 'classnames';
import PropTypes from 'prop-types'
function InputCustom({
    title = "",
    type = "text",
    isRequired = false,
    labelWidth = null,
    placeholder ="",
    labelClassName = "",
    wrapInputClassName = "",
}) {
    return (
        <div style={{
            display: !labelClassName || !wrapInputClassName ? 'flex' : undefined, alignItems: 'center',
        }}
            className={classNames({ "row": !!labelClassName && !!wrapInputClassName },"form-group")}
        >
            <label
                style={{
                    minWidth: labelWidth??undefined
                }}
                className={classNames(labelClassName, "col-form-label")}
            >
                {title}
                {isRequired && <span style={{ color: 'red' }} >*</span>}
            </label>
            <div className={classNames(wrapInputClassName)}
                style={{flexGrow: !labelClassName && !wrapInputClassName ? 1 : undefined}}
            >
                <input
                    type={type ?? "text"}
                    style={{
                        padding: '8px 8px',
                        border: '1px solid rgba(1,1,1,0.12)',
                        width: '100%'
                    }}

                    placeholder={placeholder}

                />
            </div>
        </div>);
}
InputCustom.propTypes = {
    title: PropTypes.string,
    type: PropTypes.oneOf(["text", "number"]),
    isRequired: PropTypes.bool,
    labelWidth: PropTypes.any
}


export default InputCustom;