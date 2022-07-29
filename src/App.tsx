import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import './App.scss'
import React from 'react';
import {useLoading} from "./UX/loading";
import Loader from "./components/Loader/Loader";
import {useSorter} from "./UX/sorter";

function App() {
    const {
        loading,
        searchText,
        setSearchText,
        head,
        selectedBlock,
        onNextPage,
        onPrevPage,
        setSelectPage,
        pages,
        selectPage,
        imageSrc,
        rows,
        setRows
    } = useLoading()

    const {
        sortData
    } = useSorter(rows, setRows)

    return (
        <div className="App">
            {loading && <Loader/>}
            {
                <div className="content">
                    <Search searchText={searchText} setSearchText={setSearchText}/>
                    <Table imageSrc={imageSrc} head={head} rows={selectedBlock} sortData={sortData}/>
                    <BottomMenu onNextPage={onNextPage} onPrevPage={onPrevPage} setSelectPage={setSelectPage}
                                pages={pages} selectPage={selectPage}/>
                </div>
            }
        </div>
    );
}

export default App;