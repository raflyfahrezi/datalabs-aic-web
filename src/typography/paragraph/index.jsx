import React from 'react'

const paragraph = ({ children, className, secondary }) => {
    return (
        <p
            className={`text-white ${
                secondary ? 'text-gray-400' : ''
            } ${className}`}
        >
            {children}
        </p>
    )
}

export default paragraph
