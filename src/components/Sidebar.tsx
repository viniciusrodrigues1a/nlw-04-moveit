import styles from "../styles/components/Sidebar.module.css";

function Sidebar() {
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

      <div />
    </div>
  );
}

export default Sidebar;
