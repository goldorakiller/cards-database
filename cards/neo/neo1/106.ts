import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-106",
	localId: 106,

	// Card informations
	name: {
		en: "Fighting Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/106/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/106/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card

