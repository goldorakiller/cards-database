import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-80",
	localId: 80,

	// Card informations
	name: {
		en: "Energy Removal 2",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/80/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/80/high.png",
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
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
