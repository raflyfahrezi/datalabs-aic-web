import axios from 'axios'

const fetchResponse = async ({ path, chatHistory, checkRegex }) => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

    const body = new URLSearchParams()

    const copyOfChatHistory = [...chatHistory]
    const userMessage = copyOfChatHistory.pop()

    if (checkRegex) {
        const message = userMessage.message

        if (new RegExp(['tidak', 'enggak'].join('|')).test(message)) {
            body.append('chat', 'bintangfarhandikaedityatidak')
        }

        if (
            new RegExp(['ya', 'sudah', 'boleh', 'baik', 'iya'].join('|')).test(
                message
            )
        ) {
            body.append('chat', 'bintangfarhandikaedityaiya')
        }
    } else {
        body.append('chat', userMessage.message)
    }

    const { data } = await axios.post(`${BASE_URL}/${path ?? ''}`, body)

    return data
}

const getBotResponse = async ({
    chatType,
    chatHistory,
    chatContext,
    userHaveCode,
    userLanguage,
    userBackground,

    setChatType,
    setChatContext,
    setUserHaveCode,
    setUserLanguage,
    setUserBackground,

    savedResponse,
    setSavedResponse,

    pushMessageToHistory,
}) => {
    if (chatContext === 'tanya_background') {
        const response = await fetchResponse({
            path: '/chatbot_deteksi_background',
            chatHistory,
        })

        setUserBackground(response.tag)
        setChatContext('tanya_pernah_ngoding')

        pushMessageToHistory({
            type: 'bot',
            message: 'Apa kamu sudah pernah belajar pemrograman sebelum nya ?',
        })
    } else if (chatContext === 'tanya_pernah_ngoding') {
        const response = await fetchResponse({
            path: '/chatbot_deteksi_ya_tidak',
            chatHistory,
        })

        if (response.tag === 'ya') {
            setChatContext('tanya_bahasa')

            pushMessageToHistory({
                type: 'bot',
                message: 'Bahasa pemrograman apa yang pernah kamu pelajari ?',
            })
        } else {
            setChatContext('lengkap')

            pushMessageToHistory({
                type: 'bot',
                message: `${savedResponse.res}. Apakah kamu tertarik untuk untuk berkarir di bidang ${savedResponse.tag2}`,
            })
        }
    } else if (chatContext === 'tanya_bahasa') {
        const response = await fetchResponse({
            path: 'chatbot_deteksi_bahasa',
            chatHistory,
        })

        setUserLanguage(response.tag)

        setChatContext('lengkap')

        pushMessageToHistory({
            type: 'bot',
            message: `${savedResponse.res}. Apakah kamu tertarik untuk untuk berkarir di bidang ${savedResponse.tag2}`,
        })
    } else if (chatContext === 'lengkap') {
        const response = await fetchResponse({
            path: 'chatbot_deteksi_ya_tidak_karir',
            checkRegex: true,
            chatHistory,
        })

        if (response.tag === 'ya') {
            pushMessageToHistory({
                type: 'bot',
                message:
                    'Okay... Ini course yang sudah RAKA pilihkan untuk kamu',
                courses: response.course,
            })
        } else if (response.tag === 'tidak') {
            pushMessageToHistory({
                type: 'bot',
                message: 'Kamu tertarik berkarir di bidang apa ?',
            })
        } else if (response.tag === 'ngawur') {
            pushMessageToHistory({
                type: 'bot',
                message: 'Kamu tertarik berkarir di bidang apa ?',
            })
        } else {
            pushMessageToHistory({
                type: 'bot',
                message:
                    'Terimakasih telah berkonsultasi. Sampai jumpa kembali',
            })
        }
    } else {
        const response = await fetchResponse({ chatHistory })

        if (response.type === 'karir' && userBackground === '') {
            console.log(response)

            setSavedResponse(response)

            setChatContext('tanya_background')

            pushMessageToHistory({
                type: 'bot',
                message:
                    'Sebelum itu RAKA mau tau dulu nih, latar belakang pekerjaan/pendidikan kamu apa ?',
            })
        } else {
            pushMessageToHistory({ type: 'bot', message: response.res })
        }
    }
}

export default getBotResponse
