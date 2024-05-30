import React, { useState } from "react";
import styles from "../styles/TagFilter.module.scss";

interface TagFilterProps {
  tags: string[];
  selectedTags: string;
  onTagClick: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  selectedTags,
  onTagClick,
}) => {
  console.log(tags, selectedTags);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <div className={styles["tag-filter"]}>
      {tags.map((tag, i) => (
        <button
          key={tag}
          className={`${styles.tag} ${
            selectedTag === tag ? styles.selected : ""
          }`}
          onClick={() => {
            setSelectedTag(tag);
            onTagClick(tag);
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
export default TagFilter;
