import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base5-77",
	localId: 77,

	// Card informations
	name: {
		en: "Nightly Garbage Run",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/77/high.png",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
