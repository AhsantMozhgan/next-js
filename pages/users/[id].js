import { useRouter } from 'next/router'

function UserId() {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)

    function showUserIdHandler() {
        // router.push('/users/masood')
        router.push({
            pathname: '/users/[id]',
            query: { id: 'masood' }
        })

    }

    return (
        <div>
        	<h2>User ID Page</h2>
            <button onClick={showUserIdHandler}>Show User ID</button>
        </div>
    )
}

export default UserId
