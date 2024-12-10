import { AgCharts } from "ag-charts-react";
import styles from "./styles.module.css";
import { useState } from "react";

export const WeeklyActivity = () => {
    const data = [
        { quarter: "Sat", deposit: 16, withdraw: 140 },
        { quarter: "Sun", deposit: 124, withdraw: 20 },
        { quarter: "Mon", deposit: 112, withdraw: 20 },
        { quarter: "Tue", deposit: 118, withdraw: 24 },
        { quarter: "Wed", deposit: 118, withdraw: 24 },
        { quarter: "Thu", deposit: 118, withdraw: 24 },
        { quarter: "Fri", deposit: 118, withdraw: 24 },
    ];

    const [options, setOptions] = useState({
        data,
        background: {
            fill: 'transparent',
        },
        series: [
            {
                type: "bar",
                xKey: "quarter",
                yKey: "deposit",
                yName: "Deposit",
                cornerRadius: 20,
                fill: "#1814F3",
            },
            {
                type: "bar",
                xKey: "quarter",
                yKey: "withdraw",
                yName: "Withdraw",
                cornerRadius: 20,
                fill: "#16DBCC",
            },
        ],
        legend: {
            position: 'top',
            item: {
                paddingX: 10,
                paddingY: 5,
            },
            spacing: 20,
        },
    });

    return (
        <div className={styles.container}>
            <h3>Weekly Activity</h3>
            <div className={styles.bar}>
                <AgCharts options={options} />
            </div>
        </div>
    );
};
