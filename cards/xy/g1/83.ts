import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-83",
	localId: 83,

	// Card informations
	name: {
		en: "Basic Fairy Energy",
		fr: "Énergie Fairy de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/83/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/83/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/83/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/83/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.Common,

	category: Category.ENERGY,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
