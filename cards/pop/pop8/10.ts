import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop8-10",
	localId: 10,

	// Card informations
	name: {
		en: "Rare Candy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop8/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop8/10/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "POP Series 8",
		code: "pop8"
	}
}

export default card
