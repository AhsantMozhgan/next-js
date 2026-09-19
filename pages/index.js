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
    return {
        props: {
            products: [{ id: 'p1', title: 'Product 1' }],
        },
    }
}

export default HomePage
