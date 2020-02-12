import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-94",
	localId: 94,

	// Card informations
	name: {
		en: "Starmie",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/94/high.png",
		},
	},

	evolveFrom: {
		en: "Staryu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Recover",
		},
		text: {
			en: "Discard 1 Energy card to Starmie in order to use this attack. Remove all damage counters from Starmie.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Star Freeze",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
