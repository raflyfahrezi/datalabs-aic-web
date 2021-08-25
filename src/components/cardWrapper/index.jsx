import React from 'react'

const cardWrapper = ({ children }) => {
    return (
        <div className='w-full grid grid-flow-col gap-4 overflow-auto'>
            {children}
        </div>
    )
}

export default cardWrapper
