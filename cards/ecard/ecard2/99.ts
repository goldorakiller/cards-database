import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-99",
	localId: 99,

	// Card informations
	name: {
		en: "Paras",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 46,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/99/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spore",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Spore Evolution",
		},
		text: {
			en: "Search your deack for a card that evolves from Paras. Attach it to Paras. This counts as evolving Paras. Shuffle your deck afterwards.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
