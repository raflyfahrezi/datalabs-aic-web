import React from 'react'

import { Paragraph } from '@typography'

const navigation = () => {
    return (
        <div className='w-full px-6 py-4 flex justify-between'>
            <div>
                <p>Logo</p>
            </div>
            <div className='grid grid-flow-col gap-4'>
                <div>
                    <Paragraph>Home</Paragraph>
                </div>
                <div>
                    <Paragraph>Log In</Paragraph>
                </div>
                <div>
                    <Paragraph>Sign Up</Paragraph>
                </div>
            </div>
        </div>
    )
}

export default navigation
