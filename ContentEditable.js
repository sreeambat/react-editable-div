import PropTypes from 'prop-types';
import React from 'react';

const ContentEditable = ({ value, className, onBlur }) => {
    const ceRef = React.useRef();
    const [data, setData] = React.useState('')

    function handleBlur(e) {
      setData(e.target.innerText)
      onBlur(e.target.innerText)
    }

    React.useEffect(() => {
      setData(value)
    }, [value])

    React.useEffect(() => {
      ceRef.current.innerText = data;
    }, [data])

    return (
        <div ref={ceRef} contentEditable className={className} onBlur={handleBlur} />
    )
}


ContentEditable.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    onBlur: PropTypes.func,
}


export default ContentEditable;
