import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-59",
	localId: 59,

	// Card informations
	name: {
		en: "Energy Retrieval",
		fr: "Récupération d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/59/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/59/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/59/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/59/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez 2 cartes Énergie de base de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
