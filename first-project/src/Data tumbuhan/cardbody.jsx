import React from 'react';
import DeleteButton from './deletebutton';

const CardBody = ({ item, onDelete }) => {
  return (
    <div className="card">
      <p>ID: {item.id}</p>
      <p>Nama: {item.nama}</p>
      <p>Jenis: {item.jenis}</p>
      <p>Warna: {item.warna}</p>
      <DeleteButton id={item.id} onDelete={onDelete} />
    </div>
  );
}

export default CardBody;
