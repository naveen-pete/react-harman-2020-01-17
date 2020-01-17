import React from 'react';

import { categories } from '../data/store';

const Categories = () => {
  return <div>
    <h4>Categories</h4>
    <div className="list-group">
      {categories.map(c => <button
        key={c.id}
        type="button"
        className="list-group-item list-group-item-action"
      >
        {c.name}
      </button>)
      }
    </div>
  </div>;
};

export default Categories;
