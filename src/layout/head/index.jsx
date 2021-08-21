import React from 'react'
import { NextSeo } from 'next-seo'

const head = ({ title }) => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME
    const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION

    const defaultTitle = 'Oops'
    const titleTemplate = `%s | ${appName}`
    const description = appDescription

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
