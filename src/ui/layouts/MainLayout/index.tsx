import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.left_side}>
        <Sidebar />
      </div>
      <div className={styles.right_side}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
