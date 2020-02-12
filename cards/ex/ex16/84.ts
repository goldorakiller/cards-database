import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-84",
	localId: 84,

	// Card informations
	name: {
		en: "Claw Fossil",
	},

	hp: 40,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/84/high.png",
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
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
