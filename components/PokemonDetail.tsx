 

export default function PokemonDetail({ pokemon }: any) {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">{pokemon.name.toUpperCase()}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-32 h-32 mx-auto"
      />
      <h2 className="text-xl font-semibold mt-4">Abilities:</h2>
      <ul>
        {pokemon.abilities.map((a: any , i : any) => (
          <li key={i}>{a.ability.name}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Type:</h2>
      <ul>
        {pokemon.types.map((t : any, i:any) => (
          <li key={i}>{t.type.name}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Stats:</h2>
      <ul>
        {pokemon.stats.map((s:any, i:any) => (
          <li key={i}>
            {s.stat.name}: {s.base_stat}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Moves:</h2>
      <ul className="grid sm:grid-cols-3 gap-2">
        {pokemon.moves.slice(0, 10).map((m:any, i:any) => (
          <li key={i} className="text-sm">
            {m.move.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
