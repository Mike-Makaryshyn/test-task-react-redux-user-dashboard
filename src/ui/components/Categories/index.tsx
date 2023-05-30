import { useSelector } from "react-redux";
import { CategoriesInterface } from "../../../store/slices/types";

import CategoryCompleted from "../CategoryCompleted";

import styles from "./Categories.module.scss";

const Categories: React.FC = () => {
  const { categories } = useSelector((state: any) => state.userDashboard);

  return (
    <div className={styles.categories_completed_wrapper}>
      {categories.map((category: CategoriesInterface) => (
        <CategoryCompleted
          key={category.id}
          icon={category.Icon}
          text={category.text}
          completed={category.completed}
          total={category.total}
        />
      ))}
    </div>
  );
};

export default Categories;
