import { ExpenseStatistics } from "./components/ExpenseStatistics"
import { MostSellingTable } from "./components/MostSellingTable"
import { RecentOrders } from "./components/RecentOrders"
import { StatisticsCards } from "./components/StatisticsCards"
import { WeeklyActivity } from "./components/WeeklyActivity"
import styles from "./styles.module.css"

export const Main = () => {
    return <div className={styles.container}>
        <div className={styles.firstRow}>
            <MostSellingTable />
            <RecentOrders />
        </div>
        <div className={styles.secondRow}>
            <WeeklyActivity />
            <ExpenseStatistics />
        </div>
        <div className={styles.thirdRow}>
            <StatisticsCards />
        </div>
    </div>
}