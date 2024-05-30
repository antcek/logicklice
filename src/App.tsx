import React, { useEffect, useState } from "react";
import CourseList from "./components/CourseList.tsx";
import TagFilter from "./components/TagFilter.tsx";
import { fetchCourses } from "./services/api.ts";
import styles from "./App.module.scss";

interface Course {
  id: number;
  name: string;
  bgColor: string;
  tags: string[];
  image: string;
}

const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string>("");
  useEffect(() => {
    const getCourses = async () => {
      const courses = await fetchCourses();
      setCourses(courses);
      const allTags = Array.from(
        new Set(courses.flatMap((course) => course.tags))
      );
      setTags(allTags as string[]);
    };
    getCourses();
  }, []);

  useEffect(() => {
    setFilteredCourses(
      courses.filter((course) => course.tags.includes(selectedTags))
    );
  }, [selectedTags, courses]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(tag);
  };

  return (
    <div className={styles["app"]}>
      <TagFilter
        tags={tags}
        selectedTags={selectedTags}
        onTagClick={handleTagClick}
      />
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default App;
