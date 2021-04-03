import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getInfo, setInfo, setSelectedRows} from "../redux/reducers/infoReducer";
import Table from "./Table";
import {sortBy} from "../utils/sort";


export default function InfoContainer() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfo({url: './data.json'}))
    }, [dispatch])


    const {people, headers, isLoading, sortOrder, selectedRows} = useSelector(state => state.info)

    const onSortHandler = (sortField) => {
        const dataCopy = people;
        const order = sortOrder === 'asc' ? 'desc' : 'asc';
        const orderedData = sortBy(dataCopy, sortField, order);
        debugger
        dispatch(setInfo({people: orderedData, sortOrder, sortField}))
    }

    const onRowSelectHandler = (e, row) => {
        let selectedRowsCopy = [...selectedRows];
        if (e.currentTarget.classList.contains("highlight")) {
            selectedRowsCopy = selectedRowsCopy.filter((r) => r.id !== row.id)
        } else {
            selectedRowsCopy.push(row)
        }
        e.currentTarget.classList.toggle("highlight")
        dispatch(setSelectedRows(selectedRowsCopy))
    }

    return (
        <div className="Info">
            {isLoading ? "LOADING" :
                <Table onSortClick={onSortHandler}
                       onRowSelect={onRowSelectHandler}
                       peopleList={people}
                       headers={headers}
                       selectedRows={selectedRows}/>}
        </div>
    );
}
