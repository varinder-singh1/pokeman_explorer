# Pokémon Explorer

A responsive Pokémon Explorer web app built with Next.js 15 and TypeScript. It fetches data from the PokeAPI and allows users to browse Pokémon, search by name, and view detailed stats of each Pokémon.

## Features

- List of Pokémon with search functionality
- Detailed Pokémon page with image, abilities, types, stats, and moves
- Next.js dynamic routing for individual Pokémon pages
- Styled using TailwindCSS

## Tech Stack

- **Framework:** Next.js 15 (with TypeScript)
- **Styling:** TailwindCSS
- **API:** PokeAPI

## Installation & Setup

### 1. Clone the Repository

git clone https://github.com/your-username/pokemon-explorer.git
cd pokemon-explorer

### 2. Install Dependencies

npm install

### 3. Run the Development Server

npm run dev

Open (http://localhost:3000) in your browser.

## Build for Production

npm run build
npm run start

## API Reference

Data is fetched from [PokeAPI](https://pokeapi.co/). Example request:

https://pokeapi.co/api/v2/pokemon/{id}
