import { fetchPokemonDetail } from "@/utils/api";
import PokemonDetail from "@/components/PokemonDetail";
 

 

// Define the expected props for the page
export default async function PokemonPage({ params }: any) {
  const pokemon = await fetchPokemonDetail(params.id);
  return <PokemonDetail pokemon={pokemon} />;
}

 
