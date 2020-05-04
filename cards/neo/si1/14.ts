import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "si1-14",
	localId: 14,

	// Card informations
	name: {
		en: "Slowking",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 199,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/si1/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/si1/14/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Revelation",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a Trainer card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Southern Islands",
		code: "si1"
	}
}

export default card
