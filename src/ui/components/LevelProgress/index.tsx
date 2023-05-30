import planet2 from "../../../assets/planet_2.png";
import wavingHand from "../../../assets/icons/waving_hand_icon.svg";

import { useSelector } from "react-redux";
import Circle from "../Circle";

import styles from "./LevelProgress.module.scss";

const LevelProgress: React.FC = () => {
  const { user, currentLevel, totalCompleted } = useSelector(
    (state: any) => state.userDashboard
  );

  return (
    <div className={`${styles.progress_wrapper} tile`}>
      <div className={styles.progress_greetings}>
        <span>Hey, {user}!</span>
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

        <Circle progress={100 - totalCompleted} width="10rem" height="100%" />

        <div className={styles.progress_planet_level}>
          <p>{currentLevel}</p>
          <span>level</span>
        </div>
      </div>

      <div className={styles.progress_to_next_level}>
        <p>{100 - totalCompleted}% to reach next level</p>
      </div>
    </div>
  );
};

export default LevelProgress;
