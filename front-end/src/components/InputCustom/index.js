import classNames from 'classnames';
import PropTypes from 'prop-types'
function InputCustom({
    title = "",
    type = "text",
    isRequired = false,
    labelWidth = null,
    placeholder = "",
    labelClassName = "",
    wrapInputClassName = "",
    row = true,
    disabled = false,
    styleLabel = {}
}) {
    if (!row) {
        return (
            <div
                className={classNames({ "row": !!labelClassName && !!wrapInputClassName }, "form-group")}
            >
                <div>
                    <label
                        style={{
                            minWidth: labelWidth ?? undefined,
                            ...styleLabel
                        }}
                        className={classNames(labelClassName, "col-form-label")}
                    >
                        {title}
                        {isRequired && <span style={{ color: 'red' }} >&nbsp;*</span>}
                    </label>
                </div>
                <div className={classNames(wrapInputClassName)}
                    style={{ flexGrow: !labelClassName && !wrapInputClassName ? 1 : undefined }}
                >
                    {
                        type === "textarea" ? (
                            <textarea style={{width: '100%'}} />
                        ) : (
                            <input
                                type={type ?? "text"}
                                style={{
                                    padding: '8px 8px',
                                    border: '1px solid rgba(1,1,1,0.12)',
                                    width: '100%'
                                }}
                                disabled={disabled}
                                placeholder={placeholder}

                            />
                        )
                    }
                </div>
            </div>
        )
    }
    return (
        <div style={{
            display: !labelClassName || !wrapInputClassName ? 'flex' : undefined, alignItems: 'center',
        }}
            className={classNames({ "row": !!labelClassName && !!wrapInputClassName }, "form-group")}
        >
            <label
                style={{
                    minWidth: labelWidth ?? undefined
                }}
                className={classNames(labelClassName, "col-form-label")}
            >
                {title}
                {isRequired && <span style={{ color: 'red' }} >&nbsp;*</span>}
            </label>
            <div className={classNames(wrapInputClassName)}
                style={{ flexGrow: !labelClassName && !wrapInputClassName ? 1 : undefined }}
            >
                <input
                    type={type ?? "text"}
                    style={{
                        padding: '8px 8px',
                        border: '1px solid rgba(1,1,1,0.12)',
                        width: '100%'
                    }}
                    disabled={disabled}
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