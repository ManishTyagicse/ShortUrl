import React, { useEffect, useState } from "react";
import FormContainer from "./FormContainer";
import { serverURL } from "../helpers/Constants";
import DataTable from "./DataTable";
import axios from "axios";

function Container() {
  const [tableData, setTableData] = useState([
    {
      _id: "",
      fullURL: "",
      shortURL: "",
      clicks: 0,
      createdAt: null,
      updatedAt: null,
    },
  ]);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetchTableData();
  }, [reload]);

  const reloadpage = () => {
    setReload(true);
  };

  const fetchTableData = async () => {
    const res = await axios.get(`${serverURL}/shortUrl`);
    console.log(`The response is:`, res);
    setTableData(res.data);
    setReload(false);
    console.log("Data : ", tableData);
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div>
      <FormContainer reloadpage={reloadpage} />
      <DataTable reloadpage={reloadpage} data={tableData} />
    </div>
  );
}

export default Container;
