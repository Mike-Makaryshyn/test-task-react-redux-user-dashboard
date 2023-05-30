import planet2 from "../../../assets/planet_2.png";
import wavingHand from "../../../assets/icons/waving_hand_icon.svg";

import Circle from "../Circle";

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
          className={styles.planet_img}
          src={planet2}
          alt="Planet number 2 from 5 which represents your progress"
        />

        <Circle progress={50} width="10rem" height="100%"/>

        <div className={styles.progress_planet_level}>
          <p>4</p>
          <span>level</span>
        </div>
      </div>

      <div className={styles.progress_to_next_level}>
        <p>63% to reach next level</p>
      </div>
    </div>
  );
};

export default LevelProgress;
