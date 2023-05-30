import planet_1 from "../../../assets/planet_1.png";
import planet_2 from "../../../assets/planet_2.png";
import planet_3 from "../../../assets/planet_3.png";
import planet_4 from "../../../assets/planet_4.png";
import planet_5 from "../../../assets/planet_5.png";
import astronaut from "../../../assets/astronaut.png";

import styles from "./UniverseProgress.module.scss";
import Circle from "../Circle";

const UniverseProgress: React.FC = () => {
  return (
    <>
      <div className={styles.universe}>
        <div className={`${styles.universe_progress} tile`}>
          <div className={styles.planet_wrapper}>
            <img className={styles.planet_img} src={planet_1} alt="Planet" />
          </div>
          <div className={styles.planet_wrapper}>
            <img className={styles.planet_img} src={planet_2} alt="Planet" />
            <img
              className={styles.astronaut_img}
              src={astronaut}
              alt="Astronaut above the planet"
            />
            <Circle progress={34} width="100%" height="100%" />
          </div>
          <div className={styles.planet_wrapper}>
            <img className={styles.planet_img} src={planet_3} alt="Planet" />
          </div>
          <div className={styles.planet_wrapper}>
            <img className={styles.planet_img} src={planet_4} alt="Planet" />
          </div>
          <div className={styles.planet_wrapper}>
            <img className={styles.planet_img} src={planet_5} alt="Planet" />
          </div>

          <div className={styles.universe_completed}>37% Completed</div>
        </div>
      </div>
    </>
  );
};

export default UniverseProgress;
