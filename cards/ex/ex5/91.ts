import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-91",
	localId: 91,

	// Card informations
	name: {
		en: "Magnetic Storm",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/91/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 78,
		name: "Shin-ichi Yoshikawa"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card

