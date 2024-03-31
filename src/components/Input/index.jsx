const Input = ({value, onChange, type = 'text', label = '', ...props}) => {

    if (label.length > 0) {
        return (
            <div>
                <label htmlFor={label.toLowerCase().trim().split(' ').join('_')}>{label}</label>
                <input id={label.toLowerCase().trim().split(' ').join('_')} type={type} value={value} onChange={onChange} {...props} />
            </div>
        )
    }

    return (
        <input type={type} value={value} onChange={onChange} {...props} />
    )
}
export default Input;

// This should have label, placeholder