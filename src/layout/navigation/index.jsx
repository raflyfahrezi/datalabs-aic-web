import React from 'react'

import { Link } from '@components'
import { Paragraph } from '@typography'

const navigation = () => {
    return (
        <div className='w-full px-6 py-4 flex align-middle justify-between'>
            <div>
                <Paragraph>DataLabs Courses</Paragraph>
            </div>
            <div className='grid grid-flow-col gap-4'>
                <Link href='/'>
                    <Paragraph>Home</Paragraph>
                </Link>
                <Link href='/'>
                    <Paragraph>Log In</Paragraph>
                </Link>
                <Link href='/'>
                    <Paragraph>Sign Up</Paragraph>
                </Link>
            </div>
        </div>
    )
}

export default navigation
