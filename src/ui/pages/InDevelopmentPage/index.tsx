import React from "react";
import styles from "./InDevelopment.module.scss";

const IMAGE_URL =
  "https://media.istockphoto.com/id/1306210216/vector/web-development-vector-illustration-group-of-people-create-a-website-characters-build-web.jpg?s=612x612&w=0&k=20&c=r_UChYELII_GXmku85SSuChR5-lJ7i2pGSl0YzeylUU=";

interface InDevelopmentPageProps {
  page?: string;
}

const InDevelopmentPage: React.FC<InDevelopmentPageProps> = ({ page }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{page} page is not developed yet!</h1>
      <img src={IMAGE_URL} alt="Placeholder" className={styles.image} />
    </div>
  );
};

export default InDevelopmentPage;
