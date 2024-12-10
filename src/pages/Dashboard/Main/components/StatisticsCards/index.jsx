import styles from "./styles.module.css"
import {
    ProductsCardIcon,
    OrdersCardIcon,
    RevenueCardIcon,
    TotalSavingCardIcon
}
    from "../../../../../assets/icons/dashboardIcons"

export const StatisticsCards = () => {
    const data = [
        {
            id: 1,
            title: "Products",
            amount: "2,300,300",
            icon: ProductsCardIcon
        },
        {
            id: 2,
            title: "Orders",
            amount: "3,000",
            icon: OrdersCardIcon
        },
        {
            id: 3,
            title: "Revenue",
            amount: "$3,460",
            icon: RevenueCardIcon
        },
        {
            id: 4,
            title: "Total Saving",
            amount: "$7,920",
            icon: TotalSavingCardIcon
        }

    ]
    return <div className={styles.container}>
        {
            data.map((elm) => {
                return <div className={styles.card}>
                    <div className={styles.cardIcon} style={{ backgroundColor: elm.id == 1 ? "#FFF5D9" : elm.id == 2 ? "#E7EDFF" : elm.id == 3 ? "#FFE0EB" : "#DCFAF8" }}>
                        <elm.icon />
                    </div>
                    <div className={styles.cardInfo} >
                        <p style={{color: "#718EBF"}}>{elm.title}</p>
                        <p style={{fontSize: "20px"}}>{elm.amount}</p>
                    </div>
                </div>
            })
        }
    </div>
}