import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-107",
	localId: 107,

	// Card informations
	name: {
		en: "Lt. Surge's Secret Plan",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/107/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/107/high.png",
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
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
