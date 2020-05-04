import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop4-8",
	localId: 8,

	// Card informations
	name: {
		en: "Heal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop4/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop4/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",











	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "POP Series 4",
		code: "pop4"
	}
}

export default card
