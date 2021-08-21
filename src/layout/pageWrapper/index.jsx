import React from 'react'

import Head from '../head'
import Navigation from '../navigation'

const pageWrapper = ({ children }) => {
    return (
        <>
            <Head />
            <div>
                <Navigation />
                <div>{children}</div>
            </div>
        </>
    )
}

export default pageWrapper
