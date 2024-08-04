import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search for boilerplate..."
        className="w-full px-2.5 py-2 bg-[#1d1d1d] text-white text-sm  border-gray-600 hover:bg-gray-900 transition-all cursor-pointer border-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
      />
      {/* <button
        type="submit"
        className="px-4 py-2 text-white bg-[#1d1d1d] rounded-r-md hover:bg-gray-950 focus:outline-none focus:ring-1 focus:ring-gray-500"
      >
        <FaSearch />
      </button> */}
    </form>
  );
};

export default SearchBar;
