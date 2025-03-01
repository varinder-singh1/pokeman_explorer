"use client";
import { fetchPokemons } from "@/utils/api";
import Link from "next/link";
import { useState, useEffect } from "react";

// Define the Pokemon type
interface Pokemon {
  id: number;
  name: string;
}

export default function PokemonList() {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemons().then((data: Pokemon[]) => setPokemons(data));
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    console.log("pokemons", pokemons);
  }, [pokemons]);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Pokemon Explorer</h1>
      <div className="mt-4 mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full max-w-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filteredPokemons.map((pokemon) => (
          <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
            <div className="p-4 border rounded text-center hover:bg-gray-200">
              <p className="capitalize">{pokemon.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
