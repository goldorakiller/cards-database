import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-129",
	localId: 129,

	// Card informations
	name: {
		en: "Metal Cube 01",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/129/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/129/high.png",
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
