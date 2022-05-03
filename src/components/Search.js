import React from "react";
import {Link} from "react-router-dom";

const Search = () => {

    return (
        <div className="search-box d-flex column ">
            <Link to="/createTopic"><h2>Create Topic</h2></Link>
            <Link to="/"><h2>All Topics</h2></Link>

            <Link to="/myAccount"><h2>My Account</h2></Link>

            <Link to="/changeUserPhoto"><h2>Change User photo</h2></Link>

            <Link to="/"><h2>Home</h2></Link>
        </div>
    );
};

export default Search;