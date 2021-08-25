import React from 'react'

const cardWrapper = ({ children }) => {
    return (
        <div className='w-full grid grid-flow-col overflow-auto'>
            {children}
        </div>
    )
}

export default cardWrapper
