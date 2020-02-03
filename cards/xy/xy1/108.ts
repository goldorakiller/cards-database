import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-108",
	localId: 108,

	// Card informations
	name: {
		en: "Lillipup",
		fr: "Ponchiot",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 506,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/108/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/108/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/108/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

