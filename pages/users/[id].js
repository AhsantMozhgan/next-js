import { useRouter } from 'next/router'

function UserId() {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)

    return (
        <div>
        	<h2>User ID Page</h2>
        </div>
    )
}

export default UserId