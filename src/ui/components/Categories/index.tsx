import coursesIcon from "../../../assets/icons/category_courses_icon.svg";
import foldersIcon from "../../../assets/icons/category_folder_icon.svg";
import booksIcon from "../../../assets/icons/category_books_icon.svg";
import CategoryCompleted from "../CategoryCompleted";

import styles from "./Categories.module.scss";

interface CategoriesProps {}

const categories = [
  {
    id: 1,
    text: "Courses completed",
    completed: 12,
    total: 15,
    progress: 85,
    Icon: coursesIcon,
  },
  {
    id: 2,
    text: "Folders add",
    completed: 6,
    total: 10,
    progress: 60,
    Icon: foldersIcon,
  },
  {
    id: 3,
    text: "Books read",
    completed: 3,
    total: 19,
    progress: 13,
    Icon: booksIcon,
  },
];

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <div className={styles.categories_completed_wrapper}>
      {categories.map((category) => (
        <CategoryCompleted
          key={category.id}
          icon={category.Icon}
          progress={category.progress}
          text={category.text}
          completed={category.completed}
          total={category.total}
        />
      ))}
    </div>
  );
};

export default Categories;
