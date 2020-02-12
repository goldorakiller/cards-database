import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-117",
	localId: 117,

	// Card informations
	name: {
		en: "Energy Switch",
		fr: "Échange d’Énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/117/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/117/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/117/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/117/high.png",
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
			fr: "Déplacez une Énergie de base de l’un de vos Pokémon vers un autre de vos Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
