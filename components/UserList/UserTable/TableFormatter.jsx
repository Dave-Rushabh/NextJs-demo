import React from "react";
import { useTable } from "react-table";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPen } from "react-icons/bs";

const TableFormatter = ({ columns, data, handleEdit, handleDelete }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <table {...getTableProps()} className="mx-8 w-9/12">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-slate-300 h-10 text-left"
            >
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <>
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    </>
                  );
                })}
                {/* {console.log(rows, "userRecords")} */}
                <div className="flex mx-4 items-center my-2">
                  <BsPen
                    className="mx-2 hover:cursor-pointer hover:text-green-800"
                    onClick={() => handleEdit(rows[i].values, i + 1)}
                    // onClick={() => handleEdit()}
                  />
                  <AiOutlineDelete
                    className="mx-2 hover:cursor-pointer hover:text-red-800"
                    onClick={() => handleDelete(i + 1)}
                    // onClick={() => handleDelete()}
                  />
                </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableFormatter;
