import addition1 from "../../../assets/addition1.png";
import addition2 from "../../../assets/addition2.png";
import profileIcon from "../../../assets/icons/profile.svg";
import bookIcon from "../../../assets/icons/book_icon.svg";

import { AiOutlinePlus } from "react-icons/ai";

import styles from "./NewAddition.module.scss";

interface NewAditionProps {
  books: number;
  profileViews: number;
}

const NewAddition: React.FC<NewAditionProps> = ({ books, profileViews }) => {
  return (
    <div className={styles.new_addition}>
      <div className={styles.title_wrapper}>
        <button className={styles.add_addition_button}>
          <AiOutlinePlus size={20} />
        </button>
        <span>New Addition</span>
      </div>
      <div className={styles.new_addition_info}>
        <div className={styles.addition_info_item}>
          <img src={bookIcon} alt="Book icon" />
          <span>{books}</span>
        </div>
        <div className={styles.addition_info_item}>
          <img src={profileIcon} alt="Profile icon" />
          <span>{profileViews}</span>
        </div>
      </div>

      <div className={styles.addition_imgs}>
        <img src={addition1} alt="Addition Image" />
        <img src={addition2} alt="Addition Image" />
        <div className={styles.addition_more}>
          <img src={addition2} alt="Addition More Image" />
          <div className={styles.addition_more_cover}></div>
          <span className={styles.addition_more_amount}>+10</span>
        </div>
      </div>
    </div>
  );
};

export default NewAddition;
