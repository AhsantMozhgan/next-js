import Link from 'next/link'

function UserPage() {
    const users = [
        { id: 1, username: 'Masood' },
        { id: 2, username: 'Admin' }
    ]
    return (
        <div>
            <h2>User Page</h2>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>
                        <Link href={`/users/${item.id}`}>{item.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserPage
