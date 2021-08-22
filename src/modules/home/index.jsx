import React, { useState } from 'react'

import { CourseCard, TextField, ComponentWrapper } from '@components'
import { Heading1, Heading2, Paragraph } from '@typography'

const home = ({ coursesList }) => {
    const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION

    const [keys] = useState(Object.keys(coursesList))

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
            </div>
            <div>
                <Heading2>Courses List</Heading2>
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
        </ComponentWrapper>
    )
}

export default home
