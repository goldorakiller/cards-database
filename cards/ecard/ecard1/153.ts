import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-153",
	localId: 153,

	// Card informations
	name: {
		en: "Energy Search",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/153/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/153/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 124,
		name: "Kai Ishikawa"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
