import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-83",
	localId: 83,

	// Card informations
	name: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 35,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/83/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/83/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/83/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 104,
		name: "Lee HyunJung"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Slap",
			fr: "Pierre Lune",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Mélofée peut évoluer lors du tour où il est joué.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Torgnoles",
		},
		text: {
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
		},
		damage: "10×"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
