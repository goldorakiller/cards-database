import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-84",
	localId: 84,

	// Card informations
	name: {
		en: "Energy Switch",
		fr: "Energy Switch",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/84/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/84/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/84/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez une carte Énergie de base attachée à 1 de vos Pokémon sur 1 autre de vos Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
