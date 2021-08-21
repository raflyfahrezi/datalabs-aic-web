import React from 'react'
import { NextSeo } from 'next-seo'

const head = ({ title }) => {
    const defaultTitle = 'Oops'
    const titleTemplate = '%s | DataLabs Courses'
    const description =
        'DataLabs Courses is a platform that have a lot of courses that can increase your IT Skills.'

    return (
        <NextSeo
            title={title}
            description={description}
            defaultTitle={defaultTitle}
            titleTemplate={titleTemplate}
        />
    )
}

export default head
