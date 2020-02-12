import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM212",
	localId: "SM212",

	// Card informations
	name: {
		en: "Gyarados-GX",
	},

	hp: 230,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM212/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM212/high.png",
		},
	},

	evolveFrom: {
		en: "Magikarp",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Rage",
		},
		damage: 130
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam GX",
		},
		text: {
			en: "(You can't use more than 1 GX attack in a game.)",
		},
		damage: 240
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
