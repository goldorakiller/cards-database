import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-76",
	localId: 76,

	// Card informations
	name: {
		en: "Glacia's Stadium",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/76/high.png",
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
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card

