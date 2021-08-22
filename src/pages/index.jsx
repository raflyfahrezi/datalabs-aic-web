import React from 'react'

import { Home } from '@modules'
import { PageWrapper } from '@layout'
import { coursesList } from '@assets'

const index = ({ coursesList }) => {
    return (
        <PageWrapper title='Home'>
            <Home coursesList={coursesList} />
        </PageWrapper>
    )
}

const getStaticProps = async () => {
    return {
        props: { coursesList },
        revalidate: 1000,
    }
}

export default index
export { getStaticProps }
