import React, { useState, FormEvent } from "react";
import { useRouter } from "next/router";

interface SearchFormProps {
  formClass: string;
  banner?: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ formClass, banner = false }) => {
  const [search, setSearch] = useState<string>("");
//   const router = useRouter();

//   const handleSearch = (e: FormEvent) => {
//     e.preventDefault();
//     const query = router.query;
//     router.push({
//       pathname: "/courses",
//       query: { ...query, search: search },
//     });
//   };
// onSubmit={handleSearch}

  return (
    <form className={formClass} >
      <input
        type="text"
        className="form-control"
        placeholder="Search Courses"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className=''>
        {banner === true && <span>Search Now</span>}
        <i className="ri-search-line"></i>
      </button>
    </form>
  );
};

export default SearchForm;