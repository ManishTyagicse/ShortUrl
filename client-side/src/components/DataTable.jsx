import React from "react";
import { Link } from "react-router-dom";
import { serverURL } from "../helpers/Constants";
import axios from "axios";
function DataTable(props) {
  const { data, reloadpage } = props;

  const deleteURLFunc = async (_id) => {
    const res = await axios.delete(`${serverURL}/shortURL/${_id}`);
    console.log("Delete response:", res);
    reloadpage();
  };

  const renderTableData = () => {
    if (data.length > 0) {
      return data.map((item) => (
        <tr
          key={item._id}
          className="border-b text-white bg-gray-600 hover:bg-white hover:text-gray-800"
        >
          <td className="px-6 py-3 break-words">
            <Link to={item.fullURL} target="_blank" rel="noreferrer noopener">
              {item.fullURL}
            </Link>
          </td>
          <td className="px-6 py-3">
            <Link to={item.shortURL} target="_blank" rel="noreferrer noopener">
              {item.shortURL}
            </Link>
          </td>
          <td className="px-6 py-3 mx-auto">{item.clicks}</td>
          <td className="px-6 py-3 mx-auto">
            {item.actions}
            <div
              className="cursor-pointer px-2"
              onClick={() => deleteURLFunc(item._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
          </td>
        </tr>
      ));
    } else {
      return (
        <tr>
          <td colSpan="4" className="px-6 py-4 text-center">
            No data available
          </td>
        </tr>
      );
    }
  };

  return (
    <div className="container mx-auto pt-2 pb-10">
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
        <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-md uppercase text-gray-500 bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 w-6/12">
                FullUrl
              </th>
              <th scope="col" className="px-6 py-3 w-3/12">
                ShortUrl
              </th>
              <th scope="col" className="px-6 py-3">
                Clicks
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
