import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY198a",
	localId: "XY198a",

	// Card informations
	name: {
		en: "M Camerupt-EX",
	},

	hp: 230,

	type: [
		Type.FIRE,
	],

	dexId: 323,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY198a/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY198a/high.png",
		},
	},

	evolveFrom: {
		en: "Camerupt-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magma Eruption",
		},
		text: {
			en: "You may discard the top 3 cards of each player's deck. If you do, this attack does 40 more damage for each Energy card you discarded in this way.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
