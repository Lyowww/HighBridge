import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";
import { LeftMenu } from "../../components/leftMenu";
import { TopMenu } from "../../components/topMenu";

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.leftMenu}>
                <LeftMenu />
            </div>
            <div className={styles.topMenu}>
                <TopMenu />
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
};
