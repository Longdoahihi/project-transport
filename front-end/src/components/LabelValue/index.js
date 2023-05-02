import classNames from 'classnames';
import PropTypes from 'prop-types'
function LabelValueCustom({
    label = "",
    value = "",
    isRequired = false,
    labelWidth = null,
    labelClassName = "",
    wrapInputClassName = "",
    row = false,
}) {
    if (row) {
        return (
            <div
                className={classNames({ "row": !!labelClassName && !!wrapInputClassName }, "form-group")}
            >
                <div>
                    <label
                        style={{
                            minWidth: labelWidth ?? undefined,
                            fontWeight: 'bold'
                        }}
                        className={classNames(labelClassName, "col-form-label")}
                    >
                        {label}
                        {isRequired && <span style={{ color: 'red' }} >*</span>}:
                    </label>
                </div>
                <div className={classNames(wrapInputClassName)}
                    style={{ flexGrow: !labelClassName && !wrapInputClassName ? 1 : undefined }}
                >
                    {value}
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
                    minWidth: labelWidth ?? undefined,
                    fontWeight: '600'
                }}
                className={classNames(labelClassName, "col-form-label")}
            >
                {label}
                {isRequired && <span style={{ color: 'red' }} >*</span>}:&nbsp;
            </label>
            <div className={classNames(wrapInputClassName)}
                style={{ flexGrow: !labelClassName && !wrapInputClassName ? 1 : undefined }}
            >
                {value}
            </div>
        </div>);
}
LabelValueCustom.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf(["text", "number"]),
    isRequired: PropTypes.bool,
    labelWidth: PropTypes.any
}


export default LabelValueCustom;