import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY73",
	localId: "XY73",

	// Card informations
	name: {
		en: "Rayquaza-EX",
		fr: "Rayquaza-EX",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY73/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY73/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY73/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Strike",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon can't use Dragon Strike during your next turn.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
