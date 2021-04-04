import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getInfo, setEditMode, setInfo, setSelectedRows, updateCellContent} from "../redux/reducers/infoReducer";
import Table from "./Table";
import {sortBy} from "../utils/sort";
import Spinner from "./Spinner";


export default function InfoContainer() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfo({url: './data.json'}))
    }, [dispatch])


    const {
        info: {
            people, headers, isLoading, sortOrder, selectedRows, isEditMode
        }
    } = useSelector(state => state);

    const onSortHandler = useCallback((sortField) => {
        if (isEditMode) {
            return;
        }
        const dataCopy = people.slice();
        const order = sortOrder === 'asc' ? 'desc' : 'asc';
        const sortedData = sortBy(dataCopy, sortField, order);

        dispatch(setInfo({people: sortedData, sortOrder: order, sortField}))
    }, [sortOrder, people, dispatch, isEditMode])

    const onRowSelectHandler = useCallback((e, row) => {
        if (isEditMode) {
            return;
        }
        let selectedRowsCopy = [...selectedRows];
        if (e.currentTarget.classList.contains("highlight")) {
            selectedRowsCopy = selectedRowsCopy.filter((r) => r.id !== row.id)
        } else {
            selectedRowsCopy.push(row)
        }
        e.currentTarget.classList.toggle("highlight")
        dispatch(setSelectedRows(selectedRowsCopy))
    }, [isEditMode, selectedRows, dispatch])


    const turnEditMode = useCallback((e, isEditMode, row) => {
        if (!isEditMode) {
            const key = e.target.dataset.attr;
            const newValue = key === 'age' || key === 'money' ? +e.target.innerText : e.target.innerText
            dispatch(updateCellContent({newValue, key, row}))
        }
        dispatch(setEditMode(isEditMode));
        e.target.setAttribute('contenteditable', isEditMode);
    }, [dispatch])

    const onContentEdit = useCallback((e, content) => {
        const el = e.target;
        el.addEventListener('blur', turnEditMode.bind(null, e, false, content))
        if (!el.getAttribute('contenteditable') || el.getAttribute('contenteditable') === 'false') {
            turnEditMode.call(null, e, true, content)
        }
    }, [turnEditMode])

    return (
        <div className="Info">
            {
                isLoading ? <Spinner/> : <Table onSortClick={onSortHandler}
                                                onRowSelect={onRowSelectHandler}
                                                peopleList={people}
                                                headers={headers}
                                                selectedRows={selectedRows}
                                                onContentEdit={onContentEdit}/>
            }
        </div>
    );
}
