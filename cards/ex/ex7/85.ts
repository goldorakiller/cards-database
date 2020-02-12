import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-85",
	localId: 85,

	// Card informations
	name: {
		en: "Pow! Hand Extension",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/85/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ROCKETSECRETMACHINE,
	],

	illustrator: {
		id: 76,
		name: "Katsura Tabata"
	},











	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
