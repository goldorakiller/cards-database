import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-127",
	localId: 127,

	// Card informations
	name: {
		en: "Qwilfish",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 211,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/127/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/127/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Stun Needle",
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
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
