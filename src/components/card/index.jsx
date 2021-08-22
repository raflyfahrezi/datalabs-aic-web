import React from 'react'

import { Paragraph } from '@typography'

const card = ({ text1, text2, text3 }) => {
    return (
        <div className='border-2 border-gray-600 rounded'>
            <div className='w-full h-40 bg-gray-300'></div>
            <div className='p-4 flex flex-row gap-2'>
                <Paragraph>{text1}</Paragraph>
                <Paragraph>{text2}</Paragraph>
                <Paragraph>{text3}</Paragraph>
            </div>
        </div>
    )
}

export default card
