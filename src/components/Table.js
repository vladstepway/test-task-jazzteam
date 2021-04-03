import React from "react";
import './Table.css'

export default function Table({peopleList, headers, onSortClick, onRowSelect, selectedRows}) {

    // const [selectedRowIndex, setSelectedRow] = useState(0);


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
                    <tbody>{peopleList.map((p, i) => <tr key={i + 1} onClick={(e) => onRowSelect(e, p)}>
                        <th>{i + 1}</th>
                        <td>{p.personalInfo.name}</td>
                        <td>{p.personalInfo.lastName}</td>
                        <td>{p.personalInfo.age}</td>
                        <td>{p.personalInfo.gender}</td>
                        <td>{p.money}</td>
                        <td>{p.personalInfo.maritalStatus}</td>
                        <td>{p.currency}</td>
                    </tr>)}</tbody>
                </table>

            </div>
            <span>Total items:{peopleList.length}, highlighted:{selectedRows.length}</span>
        </>
    )
}
