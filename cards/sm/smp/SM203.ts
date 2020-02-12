import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM203",
	localId: "SM203",

	// Card informations
	name: {
		en: "Tapu Fini",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 788,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM203/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM203/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Razor Fin",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Nature Wave",
		},
		text: {
			en: "If your opponent has any Ultra Beasts in play, this attack can be used for {C}.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
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
