import { useState } from "react";
import {ReactComponent as SearchIcon} from "../../Images/search.svg";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { SearchStyles } from './SearchBar.styled'


export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState("");


  const handleChange = (event) => {
    setValue(event.target.value.toLowerCase());
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      return toast.info("Please enter key words for search");
    }
    onSubmit(value);
    setValue("");
  };



  return (
    <SearchStyles>
        <form className="form" onSubmit={handleSubmit}>
            <button type="submit" className="button button-large button-primary">
                <SearchIcon className='search-icon' width="35" height="35"/> Search
            </button>
            <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                value={value}
                onChange={handleChange}
            />
        </form>
    </SearchStyles>
  );
};



Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};