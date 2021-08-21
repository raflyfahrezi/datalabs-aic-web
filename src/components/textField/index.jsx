import React from 'react'

const textField = ({ className, ...props }) => {
    return (
        <input
            type='text'
            className={`px-3 py-3 outline-none bg-gray-800 text-white rounded ${className}`}
            {...props}
        />
    )
}

export default textField
