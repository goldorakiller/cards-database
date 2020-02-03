import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-100",
	localId: 100,

	// Card informations
	name: {
		en: "Erika",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/100/high.png",
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
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card

