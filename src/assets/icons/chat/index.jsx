import React from 'react'

const chat = ({ color, size }) => {
    return (
        <svg
            role='img'
            width={size ?? '48'}
            height={size ?? '48'}
            focusable='false'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className={`fill-current ${color ? color : 'text-white'}`}
        >
            <path d='M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z'></path>
            <path d='M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z'></path>
        </svg>
    )
}

export default chat
