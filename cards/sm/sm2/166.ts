import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-166",
	localId: 166,

	// Card informations
	name: {
		en: "Double Colorless Energy",
		fr: "Double Énergie Incolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/166/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/166/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/166/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/166/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Double Énergie Incolore fournit de l’Énergie ColorlessColorless.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

