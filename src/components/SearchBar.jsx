import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const navigate = useNavigate();

  const boilerplates = [
    { name: "MERN Stack", route: "/mern-stack" },
    { name: "MEAN Stack", route: "/mean-stack" },
    { name: "MEVN Stack", route: "/mevn-stack" },
    { name: "Django with REST", route: "/django-with-rest" },
    { name: "Django with GraphQL", route: "/django-with-graphql" },
    { name: "Flask with SQL", route: "/flask-with-sql" },
  ];

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const filtered = boilerplates.filter((boilerplate) =>
        boilerplate.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  const handleOptionClick = (route) => {
    navigate(route);
  };

  return (
    <div className="relative">
      <form className="flex items-center pr-20">
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search for boilerplate..."
          className="w-full px-2.5 py-2 bg-[#1d1d1d] text-white text-sm border-gray-600 hover:bg-gray-900 transition-all cursor-pointer border-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
        />
      </form>
      {filteredOptions.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-[#1d1d1d] border border-gray-600 rounded-lg shadow-lg z-10">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-700 text-white"
              onClick={() => handleOptionClick(option.route)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;