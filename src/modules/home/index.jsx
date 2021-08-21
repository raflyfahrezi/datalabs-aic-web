import React from 'react'

import { ComponentWrapper } from '@components'
import { Heading1, Paragraph } from '@typography'

const home = () => {
    const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION

    return (
        <ComponentWrapper>
            <div className='w-full h-60 grid place-items-center'>
                <div>
                    <Heading1>Learn Something New Here</Heading1>
                    <Paragraph className='text-gray-400'>
                        {appDescription}
                    </Paragraph>
                </div>
            </div>
        </ComponentWrapper>
    )
}

export default home
