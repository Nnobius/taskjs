import React, {useEffect} from "react";
import {Irow} from "../models";
import axios from "axios";

export function useLoading() {
    const head = [
        {id: 1, title: 'ID', link: 'id', width: 110},
        {id: 2, title: 'Заголовок', link: 'title', width: 529},
        {id: 3, title: 'Описание', link: 'body', width: 432}
    ]

    const [rows, setRows] = React.useState<Irow[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false)

    const pageSize = 10
    const [totalRowsCounter, setTotalRowsCounter] = React.useState<number>(0)
    const [totalPagesCounter, setTotalPagesCounter] = React.useState<number>(0)
    const [selectPage, setSelectPage] = React.useState<number>(1)

    const [searchText, setSearchText] = React.useState<string>('')

    //A request is made to the API and the page load flags are set to the appropriate values
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?count=${pageSize}`).then((items) => {
            setRows(items.data)
            setLoading(false)
            setIsLoaded(true)
        })
    }, [])

    //After loading the data, the number of table pages is determined
    useEffect(() => {
        if (!isLoaded) return
        setTotalRowsCounter(filteredData.length)
        let getTotalPagesCounter = Math.ceil(totalRowsCounter / pageSize)
        setTotalPagesCounter(getTotalPagesCounter)
    })

    let pages = []

    for (let i = 1; i <= totalPagesCounter; i++) {
        pages.push(i)
    }

    //Implemented search by input values
    const getFilteredData = () => {
        if (!searchText) return rows
        return rows.filter(
            el => {
                return (el['title'].includes(searchText) || el['body'].includes(searchText) || String(el['id']).includes(searchText))
            }
        )
    }
    const filteredData = getFilteredData()

    const lastRow = selectPage * pageSize
    const firstRow = lastRow - pageSize
    const selectedBlock = filteredData.slice(firstRow, lastRow)

    //Implementing Next and Back Buttons
    const onPrevPage = () => {
        selectPage != 1 && setSelectPage(selectPage - 1)
    }
    const onNextPage = () => {
        selectPage != totalPagesCounter && setSelectPage(selectPage + 1)
    }

    let imageSrc: string = require('../img/arrow.png')

    return {
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
    }
}

