import { useState } from "react";
import {
    ActiveIcon,
    CurrenciesIcon,
    HomeIcon,
    OrdersIcon,
    ProductsIcon,
    ReviewsIcon,
    SettingsIcon,
    StatisticsIcon,
} from "../../assets/icons/dashboardIcons";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export const LeftMenu = () => {
    const menuItems = [
        { id: 0, title: "Dashboard", icon: HomeIcon, path: "/main" },
        { id: 1, title: "Orders", icon: OrdersIcon, path: "/orders" },
        { id: 2, title: "Products", icon: ProductsIcon, path: "/products" },
        { id: 3, title: "Reviews", icon: ReviewsIcon, path: "/reviews" },
        { id: 4, title: "Statistics", icon: StatisticsIcon, path: "/statistics" },
        { id: 5, title: "Currencies", icon: CurrenciesIcon, path: "/currencies" },
        { id: 6, title: "Settings", icon: SettingsIcon, path: "/settings" },
    ];
    const [active, setActive] = useState(0);
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div>
                <img src={"src/assets/images/credit-card-logo-dashboard.png"} />
            </div>
            <nav>
                <ul>
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li
                                key={item.id}
                                style={{ color: active === item.id ? "#2D60FF" : "" }}
                                onClick={() => { navigate(item.path); setActive(item.id) }}
                            >
                                <div
                                    className={styles.active}
                                    style={{ display: active === item.id ? "block" : "none" }}
                                >
                                    <ActiveIcon />
                                </div>
                                <Icon fill={active === item.id ? "#2D60FF" : "#000"} />
                                <span>{item.title}</span>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div >
    );
};
