import React, { useContext } from "react";
import { Songs } from "../Context";
import "./details.css";
export default function DetailSong() {
  const { song } = useContext(Songs);
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl">{song.name}</h2>
      <div className="w-240 m-auto mt-10">
        <img className="w-full" src={song.links.images[0].url} alt="avatar" />
      </div>
      <div className="flex ">
        <img className="w-70" src={song.links.images[1].url} alt="avatar" />
        <span className="text-xl ">{song.author}</span>
      </div>
    </div>
  );
}
