import React from 'react'

const paragraph = ({ children, className, secondary }) => {
    return (
        <p className={`${secondary ? 'text-gray-500' : ''} ${className}`}>
            {children}
        </p>
    )
}

export default paragraph
