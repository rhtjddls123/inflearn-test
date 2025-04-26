import { useState } from "react";
import TagButton from "./TagButton";

interface ITagListProps<T extends string> {
  tagList: T[];
  onTagClick: (tag: T) => void;
}

const TagList = <T extends string>({ tagList, onTagClick }: ITagListProps<T>) => {
  const [selectedTag, setSelectedTag] = useState<string>(tagList[0]);

  return (
    <div
      className="flex gap-x-4"
      onClick={(event) => {
        if (event.target instanceof HTMLButtonElement) {
          const tag = event.target.textContent as T;
          onTagClick(tag);
        }
      }}
    >
      {tagList.map((tag) => (
        <TagButton key={tag} isChecked={tag === selectedTag} onClick={() => setSelectedTag(tag)}>
          {tag}
        </TagButton>
      ))}
    </div>
  );
};

export default TagList;
