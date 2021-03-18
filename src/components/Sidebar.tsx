import logoImg from "../../public/logo.svg";

import styles from "../styles/components/Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.container}>
      <img src="sidebar-logo.svg" alt="Moveit" />

      <div className={styles.iconsContainer}>
        <div className={styles.iconContainerActive}>
          <img
            src="home-active.svg"
            alt="Home"
          />
        </div>
      </div>

      <div />
    </div>
  );
}

export default Sidebar;
