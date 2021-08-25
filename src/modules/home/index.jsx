import React, { useState } from 'react'

import { ChatIcon } from '@assets'
import { Heading1, Heading2, Paragraph } from '@typography'
import {
    Link,
    TextField,
    CourseCard,
    CardWrapper,
    ComponentWrapper,
} from '@components'

const home = ({ coursesList }) => {
    const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION

    const [keys] = useState(Object.keys(coursesList))

    return (
        <>
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
            </ComponentWrapper>
            <div className='grid gap-10 py-10'>
                <div>
                    <CardWrapper title='Sedang Populer'>
                        {keys.length > 0 &&
                            keys.map((item, index) => {
                                const {
                                    course_title,
                                    course_rating,
                                    course_image,
                                    course_organization,
                                    course_students_enrolled,
                                } = coursesList[item]

                                return (
                                    <CourseCard
                                        key={index}
                                        title={course_title}
                                        image={course_image}
                                        rating={course_rating}
                                        subTitle={course_organization}
                                        students={course_students_enrolled}
                                    />
                                )
                            })}
                    </CardWrapper>
                </div>
                <div>
                    <CardWrapper title='Kelas Lainnya'>
                        {keys.length > 0 &&
                            keys.reverse().map((item, index) => {
                                const {
                                    course_title,
                                    course_image,
                                    course_rating,
                                    course_organization,
                                    course_students_enrolled,
                                } = coursesList[item]

                                return (
                                    <CourseCard
                                        key={index}
                                        title={course_title}
                                        image={course_image}
                                        rating={course_rating}
                                        subTitle={course_organization}
                                        students={course_students_enrolled}
                                    />
                                )
                            })}
                    </CardWrapper>
                </div>
            </div>
            <ComponentWrapper>
                <div>
                    <div>
                        <Heading2>Konsultasi</Heading2>
                    </div>
                    <div className='grid place-items-center py-10 gap-10'>
                        <div className='flex flex-col items-center gap-5'>
                            <ChatIcon color={'text-gray-800'} size='100' />
                            <Paragraph>
                                Masih bingung dengan karir kamu di Bidang IT ?
                                Yuk konsultasikan dengan kami
                            </Paragraph>
                        </div>
                        <div>
                            <Link href='/chatbot'>
                                <button className='p-4 bg-gray-800 rounded'>
                                    <Paragraph className='text-white'>
                                        Mulai sekarang
                                    </Paragraph>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </ComponentWrapper>
        </>
    )
}

export default home
