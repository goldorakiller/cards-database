import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-90",
	localId: 90,

	// Card informations
	name: {
		en: "Claw Fossil",
	},

	hp: 40,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/90/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
