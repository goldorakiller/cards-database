import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-88",
	localId: 88,

	// Card informations
	name: {
		en: "Master Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/88/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
