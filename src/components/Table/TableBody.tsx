import React from 'react';

interface TableBodyProps {
  data: any[];
}

export const TableBody = ({ data }: TableBodyProps) => (
  <tbody>
    {data.map((item) => (
      <tr key={item.ID}>
        {Object.keys(item).map((key) => (
          <td key={key}>{item[key] || null}</td>
        ))}
      </tr>
    ))}
  </tbody>
);
