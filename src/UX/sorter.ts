import React from "react";
import {Irow} from "../models";

export function useSorter(rows:Irow[], setRows:Function) {
    const [sortID, setSortID] = React.useState<boolean>(true)
    const [sortTitle, setSortTitle] = React.useState<number>(0)
    const [sortBody, setSortBody] = React.useState<number>(0)

    //Implementation of sorting by id in ascending and descending order, by name and description in alphabetical order,
    //by number of characters and by initial state
    const sortData = (p: string) => {
        const copyData = rows.concat()
        switch (p) {
            case 'id':
                setSortBody(0)
                setSortTitle(0)
                if (sortID === true) {
                    const sortedData = copyData.sort((a, b) => {
                        return a[p] < b[p] ? 1 : -1
                    })
                    setRows(sortedData)
                    setSortID(!sortID)
                } else {
                    const sortedData = copyData.sort((a, b) => {
                        return a[p] > b[p] ? 1 : -1
                    })
                    setRows(sortedData)
                    setSortID(!sortID)
                }
                break
            case 'title':
                setSortID(true)
                setSortBody(0)
                if (sortTitle === 0) {
                    const sortedData = copyData.sort((a, b) => {
                        return a[p] > b[p] ? 1 : -1
                    })
                    setRows(sortedData)
                    setSortTitle(sortTitle + 1)
                } else if (sortTitle === 1) {
                    const sortedData = copyData.sort((a, b) => {
                        return a[p].length < b[p].length ? 1 : -1
                    })
                    setRows(sortedData)
                    setSortTitle(sortTitle + 1)
                } else {
                    const sortedData = copyData.sort((a, b) => {
                        return a['id'] > b['id'] ? 1 : -1
                    })
                    setRows(sortedData)
                    setSortTitle(sortTitle - 2)
                }
                break
            case 'body':
                setSortID(true)
                setSortTitle(0)
                if (sortBody === 0) {
                    const sortedData = copyData.sort((a, b) => {
                        return a[p] > b[p] ? 1 : -1
                    })
                    setRows(sortedData)
                    setSortBody(sortBody + 1)
                } else if (sortBody === 1) {
                    const sortedData = copyData.sort((a, b) => {
                        return a[p].length < b[p].length ? 1 : -1
                    })
                    setRows(sortedData)
                    setSortBody(sortBody + 1)
                } else {
                    const sortedData = copyData.sort((a, b) => {
                        return a['id'] > b['id'] ? 1 : -1
                    })
                    setRows(sortedData)
                    setSortBody(sortBody - 2)
                }
                break
        }
    }

    return {sortData}
}