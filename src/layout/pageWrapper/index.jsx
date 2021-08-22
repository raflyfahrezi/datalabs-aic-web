import React from 'react'

import Head from '../head'
import Footer from '../footer'
import Navigation from '../navigation'

const pageWrapper = ({ title, children }) => {
    return (
        <>
            <Head title={title} />
            <div>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}

export default pageWrapper
