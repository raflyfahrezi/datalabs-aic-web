import React from 'react'

const componentWrapper = ({ children }) => {
    return (
        <div className='w-full max-w-screen-lg h-full mx-auto px-2'>
            {children}
        </div>
    )
}

export default componentWrapper
