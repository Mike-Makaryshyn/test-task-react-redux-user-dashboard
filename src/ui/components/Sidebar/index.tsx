import { Link, useLocation } from "react-router-dom";
import LogotypeIcon from "../../../assets/icons/sidebar_icons/logo_icon.svg";

import HomeIcon from "../../../assets/icons/sidebar_icons/home_icon.svg";
import CoursesIcon from "../../../assets/icons/sidebar_icons/courses_icon.svg";
import LibrariesIcon from "../../../assets/icons/sidebar_icons/libraries_icon.svg";
import StatisticsIcon from "../../../assets/icons/sidebar_icons/statistics_icon.svg";
import UserGuidlineIcon from "../../../assets/icons/sidebar_icons/users_guide_icon.svg";
import SingOutIcon from "../../../assets/icons/sidebar_icons/logout_icon.svg";

import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  const sidebarLinks = [
    { path: "/home", text: "Home", icon: HomeIcon },
    { path: "/courses", text: "Courses", icon: CoursesIcon },
    { path: "/libraries", text: "Libraries", icon: LibrariesIcon },
    { path: "/statistics", text: "Statistics", icon: StatisticsIcon },
    {
      path: "/user_guideline",
      text: "Users guideline",
      icon: UserGuidlineIcon,
    },
  ];

  return (
    <div className={styles.sidebar}>
      <nav className={styles.sidebar_nav}>
        <ul>
          <li className={`${styles.logotype} ${styles.link}`}>
            <Link to="/home">
              <img src={LogotypeIcon} alt="Logotype icon" />
            </Link>
          </li>
          {sidebarLinks.map((link, index) => (
            <li
              key={index}
              className={`
               ${styles.link_wrapper} 
               ${pathname === link.path ? styles.active : ""}
               ${link.text === "Statistics" ? styles.lineAfterStatistics : ""}
              `}
            >
              <Link to={link.path}>
                <img
                  className={styles.nav_icon}
                  src={link.icon}
                  alt={link.text}
                />

                <span>{link.text}</span>
              </Link>
              {link.text === "Statistics" ? (
                <div className={styles.line}></div>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <div className={`${styles.sidebar_logout} ${styles.link_wrapper}`}>
        <Link to="/">
          <img
            className={styles.nav_icon}
            src={SingOutIcon}
            alt="Sing Out Logo"
          />

          <span>Sing Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
