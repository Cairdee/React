import React from "react";
import {getData} from './Data';
import Card from "./index";

function CardList (){
    const dataSiswa = getData();

    return(
        <div className="card-list">
             {dataSiswa.map((siswa) => (
                <Card{...siswa} key={siswa.nama}/>
             ))}
        </div>
    )
}