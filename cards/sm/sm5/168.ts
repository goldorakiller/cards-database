import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-168",
	localId: 168,

	// Card informations
	name: {
		en: "Missing Clover",
		fr: "Trèfle Manquant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/168/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/168/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/168/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/168/high.png",
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
			fr: "Vous pouvez jouer 4 cartes Trèfle Manquant à la fois.\n\n• Si vous avez joué une carte, regardez la carte du dessus de votre deck.\n• Si vous avez joué 4 cartes, récupérez une carte Récompense. (Cet effet agit une fois pour 4 cartes.)",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
