import { useState } from "react"
import styles from "./styles.module.css"
import { DepositFromCardIcon, DepositPayPalIcon, OrderAnotherUser } from "../../../../../assets/icons/dashboardIcons"

export const RecentOrders = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            action: "Deposit from my Card",
            date: "28 January 2021",
            amount: "-$850",
            icon: DepositFromCardIcon
        },
        {
            id: 2,
            action: "Deposit Paypal",
            date: "25 January 2021",
            amount: "+$2,500",
            icon: DepositPayPalIcon
        },
        {
            id: 3,
            action: "Jemi Wilson",
            date: "21 January 2021",
            amount: "+$5,400",
            icon: OrderAnotherUser
        }
    ])
    return <div className={styles.container}>
        <h3>Recent Orders</h3>
        <div className={styles.main}>
            {
                orders.map(elm => {
                    return <div className={styles.order}>
                        <div className={styles.orderIcon} style={
                            {
                                backgroundColor:
                                    elm.action.includes("Card") ? "#FFF5D9"
                                        : elm.action.includes("Paypal") ? "#E7EDFF"
                                            : "#DCFAF8"
                            }}>
                            <elm.icon />
                        </div>
                        <div className={styles.orderInfo}>
                            <p>{elm.action}</p>
                            <p style={{ color: "#718EBF" }}>{elm.date}</p>
                        </div>
                        <div className={styles.orderAmount}>
                            <p style={{ color: elm.amount[0] == "-" ? "#FF4B4A" : "#41D4A8" }}>{elm.amount}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}