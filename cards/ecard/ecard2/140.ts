import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-140",
	localId: 140,

	// Card informations
	name: {
		en: "Water Cube 01",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/140/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/140/high.png",
		},
	},

	evolveFrom: {},

	tags: [],













	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card

