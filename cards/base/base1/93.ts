import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-93",
	localId: 93,

	// Card informations
	name: {
		en: "Gust of Wind",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/93/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/93/high.png",
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
		name: "Base",
		code: "base1"
	}
}

export default card
