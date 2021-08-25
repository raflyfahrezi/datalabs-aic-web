import React from 'react'

const previous = ({ color }) => {
    return (
        <svg
            width='48'
            role='img'
            height='48'
            focusable='false'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className={`fill-current ${color ?? 'text-black'}`}
        >
            <path fill='none' d='M0 0h24v24H0z'></path>
            <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'></path>
        </svg>
    )
}

export default previous
