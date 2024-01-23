import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import Grid from "./Grid";
import MediaPlayer from "./MediaPlayer";
import img0 from "../images/AeKaash.jpg";
import url0 from "../songs/AeKashKeHum.mp3";
import img1 from "../images/AiseNa.png";
import url1 from "../songs/AiseNaMujhe.mp3";
import img2 from "../images/BaateinYe.jpg";
import url2 from "../songs/BaateinYeKabhiNa.mp3";
import img3 from "../images/DekhaNa.jpg";
import url3 from "../songs/DekhaNa.mp3";
import img4 from "../images/HaalKyaHai.jpg";
import url4 from "../songs/HaalKyaHai.mp3";
import img5 from "../images/Ijazaat.jpg";
import url5 from "../songs/Ijazaat.mp3";
import img6 from "../images/Khairiyat.jpg";
import url6 from "../songs/Khairiyat.mp3";
import img7 from "../images/Pachtaoge.jpg";
import url7 from "../songs/Pachtaoge.mp3";
import img8 from "../images/PukartaChala.jpg";
import url8 from "../songs/PukartaChala.mp3";
import img9 from "../images/YehZawani.jpg";
import url9 from "../songs/YehJawaani.mp3";
import img10 from "../images/YehShaam.jpg";
import url10 from "../songs/YeShaam.mp3";

const Data = [
  {
    id: 0,
    title: "Ae Kaash Ke",
    image: img0,
    artist: "Prateek",
    url: url0,
  },
  {
    id: 1,
    title: "Aise Na Mujhe",
    image: img1,
    artist: "Sandeep",
    url: url1,
  },
  {
    id: 2,
    title: "Baatein Ye",
    image: img2,
    artist: "Prateek",
    url: url2,
  },
  {
    id: 3,
    title: "Dekha Na",
    image: img3,
    artist: "Sandeep",
    url: url3,
  },
  {
    id: 4,
    title: "Haal Kya Hai",
    image: img4,
    artist: "Sandeep",
    url: url4,
  },
  {
    id: 5,
    title: "Ijazaat",
    image: img5,
    artist: "Sandeep",
    url: url5,
  },
  {
    id: 6,
    title: "Khairiyat",
    image: img6,
    artist: "Prateek",
    url: url6,
  },
  {
    id: 7,
    title: "Pachtaoge",
    image: img7,
    artist: "Sandeep",
    url: url7,
  },
  {
    id: 8,
    title: "Pukarta Chala",
    image: img8,
    artist: "Sandeep",
    url: url8,
  },
  {
    id: 9,
    title: "Yeh Jawani",
    image: img9,
    artist: "Sandeep",
    url: url9,
  },
  {
    id: 10,
    title: "Ye Shaam",
    image: img10,
    artist: "Prateek",
    url: url10,
  },
];

const Main = () => {
  const [songId, setSongId] = useState(0);

  return (
    <>
      <Container fixed>
        <h1 className="heading">Playlist</h1>
        <div className="list">
          {Data.map((data) => {
            return <Grid key={data.id} Data={data} setId={setSongId} />;
          })}
        </div>
      </Container>
      <MediaPlayer Data={Data[songId]} />
    </>
  );
};

export default Main;
