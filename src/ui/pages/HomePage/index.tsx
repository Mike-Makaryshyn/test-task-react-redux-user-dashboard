import { useEffect } from "react";

import useGetData from "../../../services/useGetData";
import { useSelector } from "react-redux";
import { AdditionInterface } from "../../../store/slices/additionsSlice";

import NewAddition from "../../components/NewAddition";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import LevelProgress from "../../components/LevelProgress";
import UniverseProgress from "../../components/UniverseProgress";
import Categories from "../../components/Categories";

import styles from "./HomePage.module.scss";

const HomePage: React.FC = () => {
  const { getData, errorMsg } = useGetData();

  const { additions, loading } = useSelector((state: any) => state.additions);

  useEffect(() => {
    if (!additions.length) getData("additions");
  }, []);

  if (loading === "pending") {
    return <Loader />;
  }

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.dashboard_top}>
          <div className={styles.dashboard_top_left}>
            <LevelProgress />
          </div>

          <div className={styles.dashboard_top_right}>
            <UniverseProgress />
            <Categories />
          </div>
        </div>
      </div>

      <div className={styles.new_addition_wrapper}>
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
