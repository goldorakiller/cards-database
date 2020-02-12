import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-76",
	localId: 76,

	// Card informations
	name: {
		en: "Fiery Flint",
		fr: "Silex Ardent",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/76/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/76/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/76/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez 2 autres cartes de votre main.\n\nCherchez jusqu’à 4 cartes Énergie Fire dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
