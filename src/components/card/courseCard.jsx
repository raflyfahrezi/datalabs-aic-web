import React from 'react'

import { Paragraph } from '@typography'

const courseCard = ({ title, rating, students, subTitle, image }) => {
    return (
        <div className='w-72 flex flex-col rounded cursor-pointer shadow-xl overflow-hidden'>
            <div className='flex flex-col h-full gap-2'>
                <div className='w-full'>
                    <img
                        src={image}
                        alt='Course Image'
                        className='w-full h-52 object-cover'
                    />
                </div>
                <div className='h-full flex flex-col justify-between p-4'>
                    <div className='pb-4'>
                        <Paragraph>{title}</Paragraph>
                        {/* <Paragraph secondary className='text-sm'>
                            {subTitle}
                        </Paragraph> */}
                    </div>
                    <div className='flex justify-end items-center gap-2'>
                        {/* <Paragraph className='text-xs'>{rating}</Paragraph>
                    <Paragraph>&middot;</Paragraph> */}
                        <Paragraph className='text-xs'>
                            {rating} | {students} stundents enrolled
                        </Paragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default courseCard
