import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-49",
	localId: 49,

	// Card informations
	name: {
		en: "Dratini",
		fr: "Minidraco",
	},

	hp: 50,

	type: [
		Type.DRAGON,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/49/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/49/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/49/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Hook",
			fr: "Crochet",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Slam",
			fr: "Souplesse",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
