import React, { useState } from 'react'

import { ChatIcon } from '@assets'
import { Heading1, Heading2, Paragraph } from '@typography'
import { Link, CourseCard, TextField, ComponentWrapper } from '@components'

const home = ({ coursesList }) => {
    const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION

    const [keys] = useState(Object.keys(coursesList))

    return (
        <ComponentWrapper>
            <div className='w-full h-80 grid place-items-center'>
                <div>
                    <Heading1>Belajar Hal Baru Disini</Heading1>
                    <Paragraph className='my-4' secondary>
                        {appDescription}
                    </Paragraph>
                    <TextField
                        placeholder='Search courses'
                        className='mt-2 w-full max-w-md'
                    />
                </div>
            </div>
            <div>
                <Heading2>Sedang Populer</Heading2>
                <div className='grid grid-cols-coursesList gap-5 mt-3'>
                    {keys.length > 0 &&
                        keys.map((item, index) => {
                            const {
                                course_title,
                                course_rating,
                                course_organization,
                                course_students_enrolled,
                            } = coursesList[item]

                            return (
                                <CourseCard
                                    key={index}
                                    title={course_title}
                                    rating={course_rating}
                                    subTitle={course_organization}
                                    students={course_students_enrolled}
                                />
                            )
                        })}
                </div>
            </div>
            <Link href='/chatbot'>
                <div className='w-20 h-20 fixed bottom-6 right-10 rounded-full grid place-items-center bg-gray-600 shadow-xl cursor-pointer'>
                    <ChatIcon />
                </div>
            </Link>
        </ComponentWrapper>
    )
}

export default home
