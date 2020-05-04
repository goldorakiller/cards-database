import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop5-8",
	localId: 8,

	// Card informations
	name: {
		en: "Boost Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop5/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop5/8/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Shin-ichi Yoshikawa",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "POP Series 5",
		code: "pop5"
	}
}

export default card
