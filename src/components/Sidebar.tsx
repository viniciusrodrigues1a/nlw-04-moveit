import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import styles from "../styles/components/Sidebar.module.css";

function Sidebar() {
  const { logout } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <img src="icons/sidebar-logo.svg" alt="Moveit" />

      <div className={styles.iconsContainer}>
        <div className={styles.iconContainerActive}>
          <img
            src="icons/home-active.svg"
            alt="Home"
          />
        </div>
      </div>

      <button type="button" className={styles.logoutButton} onClick={logout}>
        <img src="icons/logout.svg" alt=""/>
      </button>
    </div>
  );
}

export default Sidebar;
