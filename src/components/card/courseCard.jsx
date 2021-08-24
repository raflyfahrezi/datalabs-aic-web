import React from 'react'

import { Paragraph } from '@typography'

const courseCard = ({ title, rating, students, subTitle }) => {
    return (
        <div className='flex flex-col border-2 border-gray-600 rounded cursor-pointer'>
            <div className='flex flex-col h-full gap-2'>
                <div className='w-full max-h-52'>
                    <img
                        alt='Course Image'
                        className='w-full h-full object-cover'
                        src='https://via.placeholder.com/700x500.png?text=Course%20Image'
                    />
                </div>
                <div className='h-full flex flex-col justify-between p-4'>
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
        </div>
    )
}

export default courseCard
