import { NotificationsIcon, OutLinedSettingsIcon, SearchIcon } from "../../assets/icons/dashboardIcons"
import styles from "./styles.module.css"


export const TopMenu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <p>Overview</p>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.searchBar}>
                    <SearchIcon />
                    <input placeholder="Search for something" />
                </div>
                <div className={styles.settings}>
                    <OutLinedSettingsIcon />
                </div>
                <div className={styles.notifications}>
                    <NotificationsIcon />
                </div>
                <div className={styles.profile}>
                    <img src="src/assets/images/profile-img.jpeg"/>
                </div>
            </div>
        </div>
    )
}