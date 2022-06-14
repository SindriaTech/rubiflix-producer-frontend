import React from 'react';

import * as S from './styles';

interface TableProps {
  className?: string;
  table: {
    head: {
      name: string;
      label: string;
    }[];
    body: {
      rows: {
        values: {
          [key: string]: string;
        };
        actions?: {
          onEdit?(): void;
          onDelete?(): void;
        };
      }[];
    };
  };
}

export const Table: React.FC<TableProps> = ({ table, ...rest }) => (
  <S.Container {...rest}>
    <table>
      <thead>
        <tr>
          {table.head.map(({ label }) => (
            <td key={label}>
              <strong>{label}</strong>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.body.rows.map(({ values, actions }, index) => (
          <tr key={String(`-${index}`)}>
            {Object.keys(values).map((key) => (
              <td key={key}>
                <p>{values[key]}</p>
              </td>
            ))}

            {actions && (
              <td>
                {actions.onEdit && (
                  <S.Action onClick={actions.onEdit}>
                    <span className="material-icons-round ">&#xe3c9;</span>
                  </S.Action>
                )}
                {actions.onDelete && (
                  <S.Action onClick={actions.onDelete}>
                    <span className="material-icons-round ">&#xe872;</span>
                  </S.Action>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </S.Container>
);
