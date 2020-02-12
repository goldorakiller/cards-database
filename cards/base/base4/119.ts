import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-119",
	localId: 119,

	// Card informations
	name: {
		en: "Energy Removal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/119/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/119/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
