import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom';
import DeleteButton from './DeleteButton.jsx';

function CardBody({ nama, kelas, alamat }) {
    return (
        <div>
            <ul style={{ listStyleType: 'none', textAlign: 'center' }}>
                <li>Nama: {nama}</li>
                <li>Kelas: {kelas}</li>
                <li>Alamat: {alamat}</li>
            </ul>
        </div>
    );
}

function CardImage({ foto }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <img src={foto} alt="" width={200} style={{ display: 'block', margin: '0 auto', border: '2px solid', borderRadius: '30px' }} />
        </div>
    );
}

function Card({ nama, kelas, alamat, foto, onDelete }) {
    return (
        <div style={{ margin: '20px', border: '2px solid #101010', padding: '10px', borderRadius: '30px', textAlign: 'center' }}>
            <CardBody nama={nama} kelas={kelas} alamat={alamat} />
            <CardImage foto={foto} />
            <DeleteButton onClick={onDelete} />
        </div>
    );
}

function Biodata() {
    const [dataSiswa, setDataSiswa] = useState([]);

    useEffect(() => {
        const data = getData();
        setDataSiswa(data);
    }, []);

    const handleDelete = (index) => {
        setDataSiswa(dataSiswa.filter((_, i) => i !== index));
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <Header />
            {dataSiswa.map((siswa, index) => (
                <Card
                    key={index}
                    nama={siswa.nama}
                    kelas={siswa.kelas}
                    alamat={siswa.alamat}
                    foto={siswa.foto}
                    onDelete={() => handleDelete(index)}
                />
            ))}
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<Biodata />);
