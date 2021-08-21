import React from 'react'

import Head from '../head'
import Navigation from '../navigation'

const pageWrapper = ({ title, children }) => {
    return (
        <>
            <Head title={title} />
            <div>
                <Navigation />
                <div>{children}</div>
            </div>
        </>
    )
}

export default pageWrapper
