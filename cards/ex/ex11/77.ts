import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-77",
	localId: 77,

	// Card informations
	name: {
		en: "Meowth",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 52,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/77/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 47,
		name: "Hiroki Fuchino"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pickup Power",
		},
		text: {
			en: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bite",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
