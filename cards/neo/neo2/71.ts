import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-71",
	localId: 71,

	// Card informations
	name: {
		en: "Wooper",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 194,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Yukiko Baba",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Slime",
		},
		text: {
			en: "If an attack would do damage to Wooper during your opponent's next turn, your opponent flips a coin. If tails, prevent all damage done to Wooper from that attack. (Any other effects of that attack happen.)",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Slap",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
