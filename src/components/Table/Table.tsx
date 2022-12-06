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
  font-family: 'Rubik', sans-serif;
  font-weight: 500;

  background: #060a17;
  box-shadow: inset 0px 0px 24px rgba(0, 0, 0, 0.35);
  border-radius: 122px 12px 0px 0px;
  padding: 20px 30px 20px 20px;

  @media (max-width: 900px) {
    margin: auto;
    margin-top: 110px;
    margin-left: auto;
    margin-right: auto;
    width: auto;
  }

  @media (max-width: 671px) {
    border-radius: 12px 12px 0px 0px;
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

  const handleSearch = (search?: string) => {
    const searchString = search || searchValue;
    const filtered = data.filter((item) => item.DATE);
    if (!searchString) setFormattedData(filtered);
    else
      setFormattedData(
        filtered.filter((item) =>
          Object.keys(item).find((key) =>
            String(item[key] || '')
              .toLowerCase()
              .includes(searchString?.toLowerCase()),
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
        <button disabled={!data.length} onClick={() => handleSearch()}>
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
            handleSearch={handleSearch}
            setSearchValue={setSearchValue}
            data={orderedData.length > 0 ? orderedData : formattedData}
          />
        </div>
      </TableContainer>
    </>
  );
};
