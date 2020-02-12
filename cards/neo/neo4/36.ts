import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-36",
	localId: 36,

	// Card informations
	name: {
		en: "Dark Haunter",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 93,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/36/high.png",
		},
	},

	evolveFrom: {
		en: "Gastly",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Call Back",
		},
		text: {
			en: "Put a Baby Pokémon or Basic Pokémon card from your opponent's discard pile onto his or her Bench. Put 1 damage counter on that Pokémon. (You can't use this attack if your Bench is full.)",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Surround",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 20
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
