import { useEffect } from "react";

import useGetData from "../../../services/useGetData";
import { useSelector } from "react-redux";
import { AdditionInterface } from "../../../store/slices/additionsSlice";

import NewAddition from "../../components/NewAddition";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import styles from "./HomePage.module.scss";
const HomePage: React.FC = () => {
  const { getData, errorMsg } = useGetData();

  const { additions, loading } = useSelector((state: any) => state.additions);

  useEffect(() => {
   if(!additions.length) getData('additions'); 
  
  }, []);

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
        {loading === "pending" && <Loader />}
        {errorMsg && <Error errorMsg={errorMsg} />}
        {additions.map((addition: AdditionInterface) => (
          <NewAddition
            key={addition.id}
            profileViews={addition.profileViews}
            books={addition.books}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
