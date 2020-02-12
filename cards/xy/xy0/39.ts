import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-39",
	localId: 39,

	// Card informations
	name: {
		en: "Tierno",
		fr: "Tierno",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/39/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/39/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/39/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/39/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 3 cartes.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
