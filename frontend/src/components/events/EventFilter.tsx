import type { Category } from "../../types/campus-event";

interface Props {
  searchText: string;
  onSearchChange: (v: string) => void;
  category: Category | "";
  onCategoryChange: (v: Category | "") => void;
  categories: Category[];
}

function EventFilter({ searchText, onSearchChange, category, onCategoryChange, categories }: Props) {
  return (
    <div className="filter">
      <div>
        <label htmlFor="search">Search</label>
        <input id="search" type="search" value={searchText}
          onChange={(e) => onSearchChange(e.target.value)} />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category" value={category}
          onChange={(e) => onCategoryChange(e.target.value as Category | "")}>
          <option value="">All</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>
  );
}
export default EventFilter;