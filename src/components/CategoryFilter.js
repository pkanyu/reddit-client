import React from "react";
import { useDispatch } from "react-redux";
import { fetchRedditData } from "../features/reddit/redditSlice";

const categories = [
  "popular",
  "home",
  "science",
  "art",
  "programming",
  "politics",
];

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(fetchRedditData(category));
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
