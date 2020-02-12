import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-29",
	localId: 29,

	// Card informations
	name: {
		en: "Cubchoo",
		fr: "Polarhume",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 613,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/29/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/29/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/29/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/29/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Icicle Punch",
			fr: "Poing Stalactite",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
