import React from 'react'

import Navigation from '../navigation'

const pageWrapper = ({ children }) => {
    return (
        <div>
            <Navigation />
            <div>{children}</div>
        </div>
    )
}

export default pageWrapper
