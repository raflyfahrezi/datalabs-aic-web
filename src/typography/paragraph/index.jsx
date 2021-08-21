import React from 'react'

const paragraph = ({ className, children }) => {
    return <p className={`text-base ${className}`}>{children}</p>
}

export default paragraph
