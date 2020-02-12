import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-84",
	localId: 84,

	// Card informations
	name: {
		en: "Goldeen",
		fr: "Poissirène",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 118,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/84/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/84/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/84/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Horn Attack",
			fr: "Koud'korne",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "Goldeen does 10 damage to itself.",
			fr: "Poissirène s'inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
