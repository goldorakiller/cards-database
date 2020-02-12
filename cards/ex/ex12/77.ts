import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-77",
	localId: 77,

	// Card informations
	name: {
		en: "Strange Cave",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/77/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
