import React, { useState, useEffect, useCallback } from 'react';
import { sort, descend, ascend, prop } from 'ramda';
import styled from 'styled-components';

import { TableBody } from './TableBody';

interface TableProps {
  data: any[];
}

const TableContainer = styled.div`
  width: 850px;
  margin-top: 110px;
  margin-left: auto;
  margin-right: auto;
  font-family: sans-serif;
  font-weight: 500;

  background-color: #060a17;
  border-radius: 122px 0px 0px 0px;
  padding: 25px 36px 25px 14px;

  @media (max-width: 900px) {
    margin: auto;
    margin-top: 110px;
    margin-left: auto;
    margin-right: auto;
    width: auto;
  }
`;

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
        sort(
          orderDirection === 'down'
            ? descend(prop(orderBy))
            : ascend(prop(orderBy)),
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
          placeholder="пошук"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button disabled={!data.length} onClick={handleSearch}>
          пошук
        </button>
        <span>сортувати за:</span>
        <select
          disabled={!data.length}
          value={orderBy}
          onChange={(e) => handleOrder(e.currentTarget.value)}
        >
          {data && data[0]
            ? Object.keys(data[0]).map((key) => (
                <option
                  key={key}
                  value={key}
                  onClick={() => {
                    handleOrder(key);
                  }}
                >
                  {key}
                </option>
              ))
            : null}
        </select>
      </div>
      <TableContainer>
        <div>
          <TableBody
            data={orderedData.length > 0 ? orderedData : formattedData}
          />
        </div>
      </TableContainer>
    </>
  );
};
