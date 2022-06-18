import React, { useState, useEffect } from "react";
import SearchIcon from "./assets/search.svg";
import Card from "./components/Card.js";

const API_URL =
  "https://api.rawg.io/api/games?key=ed9ee12464c34d168b19dd736a3b85da";

const App = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [games, setgames] = useState([]);

  const searchGames = async (title) => {
    const response = await fetch(`${API_URL}&search=${title}`);
    const data = await response.json();
    setgames(data.results);
  };
  useEffect(() => {
    searchGames("The Last of Us");

    console.log("useEffect");
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline justify-center flex align-middle p-2">
        Games Burn
      </h1>
      <div className="justify-center flex align-middle p-2 rounded-lg border-red-500">
        <input
          className="justify-center flex align-middle p-2 border-b-2 border-gray-300 outline-none h-10 w-1000"
          type="text"
          placeholder="Search for a game"
          value={searchTerm}
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        />
        <img
          className="justify-center flex align-middle p-2 hover:bg-gray-300 rounded-full h-10 w-10"
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchGames(searchTerm);
          }}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4 sm:flex-col justify-center">
        {games.length > 0 ? (
          games.map((game) => (
            <Card
              key={game.name}
              name={game.name}
              background_image={game.background_image}
              rating={game.rating}
            />
          ))
        ) : (
          <span>No Games Found.</span>
        )}
      </div>
    </>
  );
};

export default App;
