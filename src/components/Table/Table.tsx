import React, { useState, useEffect, useCallback } from 'react';
import * as R from 'ramda';

import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';

interface TableProps {
  data: any[];
}

export const Table = ({ data }: TableProps) => {
  const [formattedData, setFormattedData] = useState<any[]>([]);
  const [orderedData, setOrderedData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [orderDirection, setOrderDirection] = useState('up');

  useEffect(() => {
    setFormattedData(data.filter((item) => item.DATE));
  }, [data]);

  const handleSearch = () => {
    const filtered = data.filter((item) => item.DATE);
    if (!searchValue) setFormattedData(filtered);
    else
      setFormattedData(
        filtered.filter((item) =>
          Object.keys(item).find((key) =>
            String(item[key] || '')
              .toLowerCase()
              .includes(searchValue?.toLowerCase()),
          ),
        ),
      );
  };

  const handleOrder = useCallback(
    (key: string) => {
      console.log({ orderBy, key });
      if (orderBy === key) {
        if (orderDirection === 'up') setOrderDirection('down');
        else if (orderDirection === 'down') {
          setOrderBy('');
          setOrderDirection('');
        }
      } else {
        setOrderBy(key);
        setOrderDirection('up');
      }
    },
    [orderBy, orderDirection],
  );

  useEffect(() => {
    if (orderBy) {
      setOrderedData(
        R.sort(
          orderDirection === 'down'
            ? R.descend(R.prop(orderBy))
            : R.ascend(R.prop(orderBy)),
          formattedData,
        ),
      );
    } else {
      setOrderedData([]);
    }
  }, [orderBy, orderDirection, formattedData]);

  return (
    <>
      <div className="search">
        <input
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button disabled={!data.length} onClick={handleSearch}>
          SEARCH
        </button>
      </div>
      <table>
        <TableHeader
          data={formattedData}
          handleOrder={handleOrder}
          orderBy={orderBy}
          orderDirection={orderDirection}
        />
        <TableBody
          data={orderedData.length > 0 ? orderedData : formattedData}
        />
      </table>
    </>
  );
};
