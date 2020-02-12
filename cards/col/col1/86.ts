import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-86",
	localId: 86,

	// Card informations
	name: {
		en: "Darkness Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},











	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
