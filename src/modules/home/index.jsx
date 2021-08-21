import React from 'react'

import { Heading1, Paragraph } from '@typography'

const home = () => {
    const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION

    return (
        <div>
            <div>
                <Heading1>Learn Something New Here</Heading1>
            </div>
            <Paragraph className='text-gray-400'>{appDescription}</Paragraph>
        </div>
    )
}

export default home
