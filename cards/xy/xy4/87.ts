import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-87",
	localId: 87,

	// Card informations
	name: {
		en: "Bunnelby",
		fr: "Sapereau",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 659,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/87/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/87/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/87/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
