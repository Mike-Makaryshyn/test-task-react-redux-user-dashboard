import Circle from "../Circle";
import styles from "./CategoryCompleted.module.scss";

interface CategoryCompletedProps {
  icon: string;
  text: string;
  total: number;
  completed: number;
}

const CategoryCompleted: React.FC<CategoryCompletedProps> = ({
  icon,
  total,
  completed,
  text,
}) => {
  return (
    <div className={`${styles.completed_wrapper} tile`}>
      <div className={styles.category_left}>
        <img src={icon} alt="Category icon" />
        <Circle
          progress={(completed * 100) / total}
          width="3.5rem"
          height="100%"
        />
      </div>
      <div className={styles.category_right}>
        <div>
          <span className={styles.completed}>{completed}</span> / {total}
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default CategoryCompleted;
