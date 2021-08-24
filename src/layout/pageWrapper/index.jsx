import React from 'react'

import Head from '../head'
import Footer from '../footer'
import Navigation from '../navigation'

const pageWrapper = ({ title, children }) => {
    return (
        <>
            <Head title={title} />
            <div className='w-full min-h-screen grid grid-rows-pageWrapper'>
                <div className='w-full'>
                    <Navigation />
                    <main className='w-full'>{children}</main>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default pageWrapper
