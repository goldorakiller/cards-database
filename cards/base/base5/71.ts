import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-71",
	localId: 71,

	// Card informations
	name: {
		en: "Here Comes Team Rocket!",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/71/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/71/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
