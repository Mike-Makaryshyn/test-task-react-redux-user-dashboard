import planet2 from "../../../assets/planet_2.png";
import wavingHand from "../../../assets/icons/waving_hand_icon.svg";

import styles from "./LevelProgress.module.scss";

const LevelProgress: React.FC = () => {
  return (
    <div className={`${styles.progress_wrapper} tile`}>
      <div className={styles.progress_greetings}>
        <span>Hey, Peter!</span>
        <img src={wavingHand} alt="Waving hand" />
      </div>
      <p className={styles.progress_text}>
        Here’s complex overview
        <span>of your progress</span>
      </p>
      <div className={styles.progress_planet}>
        <img
          src={planet2}
          alt="Planet number 2 from 5 which represents your progress"
        />
      </div>
      <div className={styles.progress_to_nex_level}>
        <p>63% to reach next level</p>
      </div>
    </div>
  );
};

export default LevelProgress;
