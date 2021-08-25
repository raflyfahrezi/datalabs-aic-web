import React, { useRef, useEffect, Children } from 'react'

import { Heading2 } from '@typography'
import { ComponentWrapper } from '@components'
import { NextIcon, PreviousIcon } from '@assets'

const cardWrapper = ({ title, className, children }) => {
    const cardWrapper = useRef()
    const cardWrapperContent = useRef()

    const getChildrenLength = Children.toArray(children).length

    const getSizePerCard = () => {
        const sizePerCard =
            cardWrapperContent.current.scrollWidth / getChildrenLength

        return sizePerCard
    }

    const getCurrentPosition = () => {
        const currentPositions = cardWrapper.current.scrollLeft

        return currentPositions
    }

    const previousOnClickHandler = () => {
        cardWrapper.current.scrollLeft = getCurrentPosition() - getSizePerCard()
    }

    const nextOnClickHandler = () => {
        cardWrapper.current.scrollLeft = getCurrentPosition() + getSizePerCard()
    }

    useEffect(() => {
        if (cardWrapper.current) {
            cardWrapper.current.scrollLeft = 0
        }
    }, [children])

    return (
        <div>
            <ComponentWrapper>
                <div className='flex justify-between items-center'>
                    <div>
                        <Heading2>{title}</Heading2>
                    </div>
                    <div>
                        <button
                            onClick={previousOnClickHandler}
                            className='hover:bg-gray-200 transition-all duration-500'
                        >
                            <PreviousIcon />
                        </button>
                        <button
                            onClick={nextOnClickHandler}
                            className='hover:bg-gray-200 transition-all duration-500'
                        >
                            <NextIcon />
                        </button>
                    </div>
                </div>
            </ComponentWrapper>
            <div
                ref={cardWrapper}
                className={`w-full py-6 overflow-auto scrollbar-hide scroll-smooth ${
                    className ?? ''
                }`}
            >
                <ComponentWrapper>
                    <div
                        ref={cardWrapperContent}
                        className='w-min grid grid-flow-col gap-4 '
                    >
                        {children}
                    </div>
                </ComponentWrapper>
            </div>
        </div>
    )
}

export default cardWrapper
