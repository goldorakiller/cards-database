import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-57",
	localId: 57,

	// Card informations
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
	},

	hp: 50,

	type: [
		Type.FIRE,
	],

	dexId: 390,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/57/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/57/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/57/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/57/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fury Swipes",
			fr: "Baie Ceriz",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			fr: "Si Ouisticram est Paralysé, retirez à Ouisticram l'État Spécial Paralysé à la fin du tour de chaque joueur.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Combo-griffe",
		},
		text: {
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
		},
		damage: "10x"
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
