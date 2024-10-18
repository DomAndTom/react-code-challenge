import { useSearchContext } from "../../contexts/search";

import "./styles.scss";

export default function Search() {
  const { search, setSearch } = useSearchContext();

  function handleChange(evt) {
    setSearch(evt.target.value);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search a Ramone"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
}
