import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-110",
	localId: 110,

	// Card informations
	name: {
		en: "Shining Noctowl",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 164,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Flashing Eyes",
		},
		text: {
			en: "Flip 3 coins. If exactly 1 is heads, the Defending Pokémon is now Asleep. If exactly 2 are heads, the Defending Pokémon is now Confused. If all 3 are heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
