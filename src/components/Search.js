import { FaSearch } from "react-icons/fa";
import "./Search.scss";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Searchbar = () => {
  /* const search = query.get("search"); */
  const [query, setQuery] = useSearchParams();
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ search: value });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Search pokemon..."
        value={value ?? ""}
        onChange={(e) => {
          const val = e.target.value;
          setValue(val);
        }}
      />
      <FaSearch className="search-icon" />
    </form>
  );
};

export default Searchbar;
