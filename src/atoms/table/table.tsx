import React from 'react';

import * as S from './styles';

interface TableProps {
  className?: string;
  title: string;
  button?: {
    text: string;
  };
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

export const Table: React.FC<TableProps> = ({
  table,
  title,
  button,
  ...rest
}) => (
  <S.Container {...rest}>
    <div>
      <h5>{title}</h5>
      {button && (
        <button type="button">
          <span className="material-icons-round calendar">&#xe145;</span>
          <p>{button.text}</p>
        </button>
      )}
    </div>
    <table>
      <thead>
        <tr>
          {table.head.map(({ label }) => (
            <td>
              <strong>{label}</strong>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.body.rows.map(({ values, actions }) => (
          <tr>
            {Object.keys(values).map((key) => (
              <td>
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
