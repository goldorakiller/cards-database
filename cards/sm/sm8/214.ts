import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-214",
	localId: 214,

	// Card informations
	name: {
		en: "Whitney",
		fr: "Blanche",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/214/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/214/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/214/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/214/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Piochez une carte. Ensuite, piochez 2 cartes pour chaque autre Blanche dans votre pile de défausse.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
