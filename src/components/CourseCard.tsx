import React from "react";
import styles from "../styles/CourseCard.module.scss";

interface CourseCardProps {
  name: string;
  bgColor: string;
  tags: string[];
  img: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  name,
  bgColor,
  tags,
  img,
}) => {
  return (
    <div className={styles["course-card"]}>
      <div className={styles["course-bg"]} style={{ backgroundColor: bgColor }}>
        <img className={styles.img} src={img} alt="img" />
      </div>
      <h3>{name}</h3>
    </div>
  );
};
export default CourseCard;
