import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-110",
	localId: 110,

	// Card informations
	name: {
		en: "Sabrina",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/110/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Ken Sugimori",











	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
