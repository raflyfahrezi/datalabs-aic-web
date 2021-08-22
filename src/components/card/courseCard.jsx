import React from 'react'

import { Paragraph } from '@typography'

const courseCard = ({ title, rating, students, subTitle }) => {
    return (
        <div className='grid border-2 border-gray-600 rounded cursor-pointer'>
            <div className='p-4 flex flex-col justify-between gap-2'>
                <div className='pb-4'>
                    <Paragraph>{title}</Paragraph>
                    <Paragraph secondary className='text-sm'>
                        {subTitle}
                    </Paragraph>
                </div>
                <div className='flex justify-end items-center gap-2'>
                    {/* <Paragraph className='text-xs'>{rating}</Paragraph>
                    <Paragraph>&middot;</Paragraph> */}
                    <Paragraph className='text-xs'>
                        {students} stundents enrolled
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}

export default courseCard
