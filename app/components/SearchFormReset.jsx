"use client";

import Link from "next/link";

const SearchFormReset = () => {
     const reset = () => {
       const form = document.querySelector(".search-form");
       if (form) {
         form.reset();
       }
     };
  return (
    <button
      type="reset"
      onClick={reset}
    >
      <Link
        href={"/"}
        className="search-btn text-white font-bold"
      >X</Link>
    </button>
  );
}

export default SearchFormReset