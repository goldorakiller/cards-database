import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base4-110",
	localId: 110,

	// Card informations
	name: {
		en: "Energy Retrieval",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/110/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/110/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
