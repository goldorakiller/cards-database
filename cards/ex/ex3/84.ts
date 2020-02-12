import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-84",
	localId: 84,

	// Card informations
	name: {
		en: "Energy Recycle System",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/84/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 156,
		name: "Zu-Ka"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
