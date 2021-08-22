import React from 'react'

import { Paragraph } from '@typography'

const index = () => {
    return (
        <footer className='w-full pt-12 pb-10'>
            <div className='text-center'>
                <Paragraph>This website is for competition purpose</Paragraph>
                <Paragraph className='text-xs' secondary>
                    DataLabs Team
                </Paragraph>
            </div>
        </footer>
    )
}

export default index
