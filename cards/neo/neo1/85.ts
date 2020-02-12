import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-85",
	localId: 85,

	// Card informations
	name: {
		en: "Energy Charge",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/85/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
