import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-209",
	localId: 209,

	// Card informations
	name: {
		en: "Tag Switch",
		fr: "Échange d’Escouade",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/209/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/209/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/209/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/209/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez jusqu’à 2 Énergies de l’un de vos Pokémon ESCOUADE vers un autre de vos Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
