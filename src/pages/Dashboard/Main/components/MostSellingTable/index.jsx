import { useState } from "react"
import styles from "./styles.module.css"

export const MostSellingTable = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Trivago",
            price: 100,
            quantity: 500
        },
        {
            id: 2,
            name: "Canon",
            price: 200,
            quantity: 30
        },
        {
            id: 3,
            name: "Uber Food",
            price: 150,
            quantity: 80
        },
        {
            id: 4,
            name: "Nokia",
            price: 250,
            quantity: 200
        },
        {
            id: 5,
            name: "Tiktok",
            price: 670,
            quantity: 100
        }
    ])
    return <div className={styles.container}>
        <h3>Most selling products</h3>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <th colSpan={4} className={styles.lineTh}>
                        <div className={styles.line} />
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return <tr key={product.id}>
                        <td>{product.id < 10 ? `0${product.id}` : product.id}.</td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}