import React from 'react';
import classnames from 'classnames';

export default function TodoFilter(props) {
  const { onFilterChange, filterType } = props;
  let allClass = 'btn btn-link';
  if (filterType === 'all') {
    allClass += ' active';
  }
  return (
    <section data-name="TodoFilter.js" className="style-3">
      <button
        className={allClass}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className={classnames('btn btn-link', { active: filterType === 'active' })}
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button
        className={classnames('btn btn-link', { active: filterType === 'completed' })}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </section>
  );
}
