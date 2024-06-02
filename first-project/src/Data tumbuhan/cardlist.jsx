import React from 'react';
import CardBody from './cardbody';

const CardList = ({ data, onDelete }) => {
  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <div className="card-list">
      {data.map(item => (
        <CardBody key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default CardList;
