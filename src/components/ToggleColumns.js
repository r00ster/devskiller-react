import React from 'react';

export const ToggleColumns = (props) => {
  const onCheckboxClick = (e) => {
    props.onCheckboxClick(e.target.name, e.target.checked);
  };

  return (
    <div className="toggle-columns">
      {
        Object.keys(props.columns).map((column, index) => {
          return (
            <div key={index}>
              <label htmlFor={column}>
                {column}
              </label>
              <input
                id={column}
                name={column}
                type="checkbox"
                onChange={onCheckboxClick}
                checked={props.columns[column]} />
            </div>);
        })
      }
    </div>
  );
};
