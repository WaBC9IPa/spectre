import React from 'react';

interface TableHeaderPros {
  data: any[];
  handleOrder: (key: string) => void;
  orderBy: string;
  orderDirection: string;
}

export const TableHeader = ({
  data,
  handleOrder,
  orderBy,
  orderDirection,
}: TableHeaderPros) => (
  <thead>
    <tr>
      {data[0] &&
        Object.keys(data[0]).map((key) => (
          <th onClick={() => handleOrder(key)} key={key}>
            {key}
            {orderBy === key ? ` (${orderDirection})` : ''}
          </th>
        ))}
    </tr>
  </thead>
);
