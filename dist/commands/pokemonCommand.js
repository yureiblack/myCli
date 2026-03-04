const paxios = require("axios");
class PokemonCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("pokemon")
            .action(async () => await this.addPokemon());
    }
    async addPokemon() {
        const res = await paxios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        console.log(res.data.name);
        console.log(res.data.abilities);
        console.log(res.data.base_experience);
        console.log(res.data.forms);
        // console.log(res.data.game_indices)
        console.log(res.data.height);
        console.log(res.data.held_items);
        // console.log(res.data.id)
        // console.log(res.data.is_default)
        console.log(res.data.location_area_encounters);
        // console.log(res.data.moves)
        // console.log(res.data.order)
        // console.log(res.data.past_abilities)
        // console.log(res.data.past_stats)
        // console.log(res.data.past_types)
        // console.log(res.data.species)
        // console.log(res.data.sprites)
        // console.log(res.data.stats)
        // console.log(res.data.types)
        console.log(res.data.weight);
    }
}
module.exports = PokemonCommand;
