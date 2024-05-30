import React from "react";
import CourseCard from "./CourseCard.tsx";
import styles from "../styles/CourseList.module.scss";

interface Course {
  id: number;
  name: string;
  bgColor: string;
  tags: string[];
  image: string;
}

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => (
  <div className={styles["course-list"]}>
    {courses.map((course) => {
      return (
        <CourseCard
          key={course.id}
          name={course.name}
          img={course.image}
          bgColor={course.bgColor}
          tags={course.tags}
        />
      );
    })}
  </div>
);

export default CourseList;
