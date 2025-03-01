export async function fetchPokemonDetail(id: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.json();
  }
  
  interface Pokemon {
  name: string;
  url: string;
  id: number;
}

 export async function fetchPokemons(): Promise<Pokemon[]> {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const data = await res.json();
    return data.results.map((p: any, index: number) => ({
      ...p,
      id: index + 1,
    }));
  }