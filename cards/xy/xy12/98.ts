import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-98",
	localId: 98,

	// Card informations
	name: {
		en: "Basic Metal Energy",
		fr: "Énergie Metal de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/98/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/98/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/98/high.png",
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
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
