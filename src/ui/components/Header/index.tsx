import React, { useState } from "react";

import notofocationLogo from "../../../assets/icons/notification_icon.svg";
import avatar from "../../../assets/avatar.png";
import searchIcon from "../../../assets/icons/search_icon.svg";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("EN");

  return (
    <header className={styles.header}>
      <div className={styles.search_wrapper}>
        <input
          className={styles.search_input}
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        {inputValue && (
          <span className={styles.clear} onClick={() => setInputValue("")}>
            X
          </span>
        )}
        <img
          className={styles.search_icon}
          src={searchIcon}
          alt="Search Icon"
        />
      </div>
      <div className={styles.header_right}>
        <select
          className={styles.lang_select}
          defaultValue={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="EN">EN</option>
          <option value="UA">UA</option>
        </select>
        <div className={styles.notification_wrapper}>
          <img src={notofocationLogo} alt="Notification Logo" />
        </div>
        <div className={styles.user}>
          <div className={styles.name_wrapper}>
            <p>Peter</p>
            <span>Admin</span>
          </div>

          <img src={avatar} alt="Avatar image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
