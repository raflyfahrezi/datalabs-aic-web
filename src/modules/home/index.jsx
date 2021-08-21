import React from 'react'

import { TextField, ComponentWrapper } from '@components'
import { Heading1, Paragraph } from '@typography'

const home = () => {
    const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION

    return (
        <ComponentWrapper>
            <div className='w-full h-72 grid place-items-center text-center'>
                <div>
                    <Heading1>Learn Something New Here</Heading1>
                    <Paragraph className='text-gray-400 m-4'>
                        {appDescription}
                    </Paragraph>
                    <TextField className='mt-2' />
                </div>
            </div>
        </ComponentWrapper>
    )
}

export default home
