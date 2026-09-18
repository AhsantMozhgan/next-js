
import { useRouter } from 'next/router'

function UserPost() {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)

    return (
        <div>
            <h2>User Post Page</h2>
        </div>
    )
}

export default UserPost