import React from 'react'

import { Paragraph } from '@typography'

const chat = ({ type, children }) => {
    if (type === 'bot') {
        return (
            <div className='max-w-md p-2 text-white border-2 border-gray-800 bg-gray-800 rounded'>
                <Paragraph>{children}</Paragraph>
            </div>
        )
    }

    if (type === 'user') {
        return (
            <div className='max-w-md p-2 border-2 border-gray-800 rounded break-words'>
                <Paragraph>{children}</Paragraph>
            </div>
        )
    }

    if (type === 'info') {
        return (
            <div className='w-full max-w-md mx-auto text-center'>
                <Paragraph secondary>{children}</Paragraph>
            </div>
        )
    }
}

export default chat
