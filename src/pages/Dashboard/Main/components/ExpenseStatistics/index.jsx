import styles from "./styles.module.css";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";

export const ExpenseStatistics = () => {
    const data = [
        { asset: "Investment", amount: 20, yield: 20 },
        { asset: "Entertainment", amount: 30, yield: 30 },
        { asset: "Bill Expense", amount: 15, yield: 15 },
        { asset: "Others", amount: 35, yield: 35 }
    ];

    const [options, setOptions] = useState({
        data: data,
        series: [
            {
                type: "pie",
                angleKey: "amount",
                radiusKey: "yield",
                legendItemKey: "asset",
                fills: ["#343C6A", "#FC7900", "#FA00FF", "#1814F3"], // Define fill colors for each slice
                strokes: ["#000000", "#000000", "#000000", "#000000"], // Define border colors
                highlightStyle: {
                    item: {
                        fill: "", // Highlight color for slices
                        stroke: "transparent",
                    },
                },
            },
        ],
    });

    return (
        <div className={styles.container}>
            <h3>Expense Statistics</h3>
            <div className={styles.bar}>
                <AgCharts options={options} />
            </div>
        </div>
    );
};
