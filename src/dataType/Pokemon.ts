export class Pokemon{
    id: number;
    pokedexId: number;
    name: string;
    
    apiTypes: ApiTypes[];
    apiGeneration: string;

    image: string;
    sprite: string;

    apiEvolutions: ApiEvolutions[];
    apiPreEvolutions: ApiPreEvolutions[];

}

class ApiTypes{
    name: string;
    image: string;
}

class ApiEvolutions{
    pokedexId: number;
    name: string;
}

class ApiPreEvolutions{
    pokedexIdd: number;
    name: string;
}