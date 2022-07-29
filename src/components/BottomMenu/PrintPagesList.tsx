import React from 'react';
import {Link} from "react-router-dom";

const PrintPagesList = ({page, selectPage, setSelectPage}:{page:number, selectPage:number, setSelectPage:Function}) => {
    return (
        <Link key={page} to={`/${page}`}>
            <span onClick={() => {setSelectPage(page)}} className={(selectPage === page && "selectedPage")||"unselectedPage"}>
                {page}
            </span>
        </Link>
    );
};

export default PrintPagesList;