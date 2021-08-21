import React from 'react'

import Head from '../head'
import Navigation from '../navigation'

const pageWrapper = ({ title, children }) => {
    return (
        <>
            <Head title={title} />
            <div>
                <Navigation />
                <main>{children}</main>
            </div>
        </>
    )
}

export default pageWrapper
