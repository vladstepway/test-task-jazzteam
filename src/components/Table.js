import React from "react";
import './Table.css'

export default function Table({peopleList, headers, onSortClick, onRowSelect, selectedRows, onContentEdit}) {

    return (
        <>
            <div className={"table-wrapper"}>
                <table>
                    <thead>
                    <tr>
                        {
                            headers.map((h, i) =>
                                <th key={i + 1}
                                    onClick={() => onSortClick(`${h.toLowerCase()}`)}
                                >
                                    {h}
                                </th>)
                        }
                    </tr>
                    </thead>
                    <tbody>{peopleList.map((p, i) => <tr key={i + 1}
                                                         onDoubleClick={(e) => onContentEdit(e, p)}
                                                         onClick={(e) => onRowSelect(e, p)}>
                        <th>{i + 1}</th>
                        <td data-attr={'name'}>{p.name}</td>
                        <td data-attr={'lastname'}>{p.lastname}</td>
                        <td data-attr={'age'}>{p.age}</td>
                        <td data-attr={'gender'}>{p.gender}</td>
                        <td data-attr={'money'}>{p.money}</td>
                        <td data-attr={'maritalStatus'}>{p.maritalStatus}</td>
                        <td data-attr={'currency'}>{p.currency}</td>
                    </tr>)}</tbody>
                </table>

            </div>
            <span>Total items:{peopleList.length}, highlighted:{selectedRows.length}</span>
        </>
    )
}
