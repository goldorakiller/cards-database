import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-124",
	localId: 124,

	// Card informations
	name: {
		en: "Fervor",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/124/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/124/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},











	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
