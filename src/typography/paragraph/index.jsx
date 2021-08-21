import React from 'react'

const paragraph = ({ className, children }) => {
    return <p className={`text-base text-white ${className}`}>{children}</p>
}

export default paragraph
