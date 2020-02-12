import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-68",
	localId: 68,

	// Card informations
	name: {
		en: "Poliwhirl",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 61,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/68/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/68/high.png",
		},
	},

	evolveFrom: {
		en: "Poliwag",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Ball",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each Energy attached to Poliwhirl but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
