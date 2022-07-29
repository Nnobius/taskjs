import React from 'react';
import "./Search.scss"

const Search = ({searchText, setSearchText} : {searchText:string, setSearchText:Function}) => {
    return (
        <div className="searchBlock dFlex itemsCenter">
            <input
                type="text"
                value={searchText}
                autoFocus
                autoComplete="off"
                placeholder="Поиск"
                className="search"
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    );
};

export default Search;