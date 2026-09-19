import fs from 'fs/promises'
import path from 'path'

function HomePage({ products }) {
    return (
        <div>
            <h2>Home Page</h2>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'products.json')

    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return {
        props: {
            products: data.products,
        },
    }
}

export default HomePage
