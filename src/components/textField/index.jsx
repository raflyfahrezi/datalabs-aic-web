import React from 'react'

const textField = ({ className, ...props }) => {
    return <input type='text' className={`p-4 ${className}`} {...props} />
}

export default textField
