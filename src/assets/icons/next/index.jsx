import React from 'react'

const next = ({ color }) => {
    return (
        <svg
            width='48'
            role='img'
            height='48'
            viewBox='0 0 24 24'
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            className={`fill-current ${color ?? 'text-black'}`}
        >
            <path fill='none' d='M0 0h24v24H0z'></path>
            <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
        </svg>
    )
}

export default next
