import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const navigate = useNavigate();

  const boilerplates = [
    { name: "MERN Stack", route: "/docs" },
    { name: "MEAN Stack", route: "/docs" },
    { name: "MEVN Stack", route: "/docs" },
    { name: "Django with REST", route: "/docs" },
    { name: "Django with GraphQL", route: "/docs" },
    { name: "Flask with SQL", route: "/docs" },
    { name: "Create React App", route: "/docs" },
    { name: "React with Vite", route: "/docs" },
    { name: "React Vite + Tailwind", route: "/docs" },
    { name: "React with Vite", route: "/docs" },
    { name: "Vue 3 with Vite", route: "/docs" },
    { name: "Vue with Tailwind", route: "/docs" },
    { name: "Angular with CLI", route: "/docs" },
    { name: "Sveltekit", route: "/docs" },
    { name: "Svelte with Vite", route: "/docs" },
    { name: "Express with MongoDB", route: "/docs" },
    { name: "Express with Typescript", route: "/docs" },
    { name: "Koa.js", route: "/docs" },
    { name: "Django with REST Framework", route: "/docs" },
    { name: "Django with GraphQl", route: "/docs" },
    { name: "Flask with SQLAlchemy", route: "/docs" },
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
        <div className="absolute left-0 w-[220px] right-0 mt-2 bg-[#1d1d1d] border border-gray-900 transition-all rounded-lg shadow-lg z-10">
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className="px-3 py-1.5 text-sm cursor-pointer hover:bg-[#171717] hover:rounded-lg text-white"
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
