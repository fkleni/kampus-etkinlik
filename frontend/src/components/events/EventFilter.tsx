import type { Category } from "../../types/campus-event";

interface EventFilterProps {
  searchText: string;
  category: Category | "";
  categories: Category[];
  onSearchChange: (text: string) => void;
  onCategoryChange: (category: Category | "") => void;
}

function EventFilter({ searchText, category, categories, onSearchChange, onCategoryChange }: EventFilterProps) {
  return (
    <form className="filter" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="search">Search events</label>
        <input
          id="search"
          type="search"
          placeholder="e.g. workshop, career"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category-filter">Category</label>
        <select
          id="category-filter"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value as Category | "")}
        >
          <option value="">All</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default EventFilter;