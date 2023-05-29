import React from "react";
import styles from "./HomePage.module.scss";
import NewAddition from "../../components/NewAddition";

const HomePage: React.FC = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={`${styles.tile} ${styles.tile1}`}>Tile 1</div>
        <div className={`${styles.tile} ${styles.tile2}`}>Tile 2</div>
        <div className={`${styles.tile} ${styles.tile3}`}>Tile 3</div>
        <div className={`${styles.tile} ${styles.tile4}`}>Tile 4</div>
        <div className={`${styles.tile} ${styles.tile5}`}>Tile 5</div>
      </div>
      <div className={styles.new_addition_wrapper}>
        <NewAddition profileViews={2873} books={13} />
        <NewAddition profileViews={2873} books={13} />
        <NewAddition profileViews={2873} books={13} />
      </div>
    </>
  );
};

export default HomePage;
