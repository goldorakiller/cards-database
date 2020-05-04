import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Sabrina's Gengar",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/14/high",
		},
	},

	evolveFrom: {
		en: "Haunter",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Pain Amplifier",
		},
		text: {
			en: "Put a damage counter on each of your opponent's Pokémon that already has any damage counters on it.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Call of the Night",
		},
		text: {
			en: "Unless this attack Knocks Out the Defending Pokémon, flip 2 coins. If both of them are heads, your opponent shuffles his or her Active Pokémon and all cards attached to it into his or her deck.",
		},
		damage: 40
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
