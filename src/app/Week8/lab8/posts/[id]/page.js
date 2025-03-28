"use client"

import { useRouter } from 'next/navigation'
import { use } from 'react'
import Link from 'next/link'
const Post = ({params}) => {
    const router = useRouter()
    const paramsObject = use(params)
    const id = paramsObject.id
    return (
        <div>
            <h1>Post ID: {id}</h1>
            <Link href={`./${id}/comments`}>
                View Comments
            </Link>
        </div>
    )
}
export default Post