import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";
import "./listsong.css";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="main-table ">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table className="table-auto ">
        <thead className="text-white ">
          <tr>
            <th style={{ width: "10%", alignItems: "center" }}>#</th>
            <th style={{ textAlign: "left" }}>Bài hát</th>
            <th style={{ width: "10%" }}>Tác giả</th>
            <th style={{ width: "10%" }}>
              <i class="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.filter((song) =>
            song.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((song, index) => (
            <tr
              key={index}
              className={`colum ${idSong === song.id && "idsongs"}`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-cente">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-cente">{song.author}</td>
              <td className="text-cente">
                <a href={song.url}>
                  <i class="fa-solid fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
