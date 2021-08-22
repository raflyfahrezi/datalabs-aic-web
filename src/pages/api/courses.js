import { coursesList } from '@assets'

const courses = async (req, res) => {
    try {
        return res.status(200).json({ ...coursesList })
    } catch {
        return res.status(200).json({})
    }
}

export default courses
