import React, { useEffect, useState } from 'react';
import axios from 'axios';
import csv from 'csvtojson';

import { Table } from './components/Table/Table';

export const App = () => {
  const [tableData, setTableData] = useState<any>([]);

  useEffect(() => {
    axios
      .get(
        /* temporary cors proxy */ 'https://api.codetabs.com/v1/proxy/?quest=https://docs.google.com/spreadsheets/d/19Qfp3aR8vXuiNNWkob2ZFHrYILQDdEQ_OY10HFuU5TU/gviz/tq?tqx=out:csv&sheet=CMS%20READY',
      )
      .then((res) => {
        csv()
          .fromString(res.data)
          .then((data) =>
            setTableData(
              data.map((item) => {
                const keys = Object.keys(item);
                const newItem = { ...item };
                keys.forEach((key) => {
                  if (newItem[key] && !Number.isNaN(Number(newItem[key])))
                    newItem[key] = Number(newItem[key]);
                });

                return newItem;
              }),
            ),
          );
      });
  }, []);

  return <Table data={tableData} />;
};
