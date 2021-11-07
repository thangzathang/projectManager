import { useState } from "react";

const filterList = ["all", "mine", "development", "design", "marketing", "sales"];

export default function ProjectFilter({ changeFilter }) {
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter);
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by: </p>
        {filterList.map((filterItem) => (
          <button key={filterItem} onClick={() => handleClick(filterItem)} className={currentFilter === filterItem ? "active" : ""}>
            {filterItem}
          </button>
        ))}
      </nav>
    </div>
  );
}
