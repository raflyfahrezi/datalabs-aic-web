import React from 'react'

import { TextField, ComponentWrapper } from '@components'
import { Heading1, Heading2, Paragraph } from '@typography'

const home = () => {
    const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION

    return (
        <ComponentWrapper>
            <div className='w-full h-80 grid place-items-center'>
                <div>
                    <Heading1>Learn Something New Here</Heading1>
                    <Paragraph className='text-gray-400 my-4'>
                        {appDescription}
                    </Paragraph>
                    <TextField
                        placeholder='Search courses'
                        className='mt-2 w-full max-w-md'
                    />
                </div>
                <div>
                    <Heading2>Courses List</Heading2>
                </div>
            </div>
        </ComponentWrapper>
    )
}

export default home
