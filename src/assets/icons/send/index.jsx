import React from 'react'

const send = ({ color }) => {
    return (
        <svg
            role='img'
            width='48'
            height='48'
            viewBox='0 0 28 28'
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            className={`fill-current ${color ? color : 'text-white'}`}
        >
            <path d='m3.79 2.77 21.07 10.08a1.25 1.25 0 0 1 0 2.26L3.8 25.18a1.25 1.25 0 0 1-1.75-1.45L4.15 16a.5.5 0 0 1 .42-.37l10.2-1.38a.25.25 0 0 0 .2-.15l.02-.06a.25.25 0 0 0-.16-.27l-.05-.02-10.2-1.38a.5.5 0 0 1-.42-.37L2.04 4.23A1.25 1.25 0 0 1 3.8 2.77z'></path>
        </svg>
    )
}

export default send
