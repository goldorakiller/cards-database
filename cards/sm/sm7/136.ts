import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-136",
	localId: 136,

	// Card informations
	name: {
		en: "Life Herb",
		fr: "Herbe Sauveuse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/136/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/136/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/136/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/136/high.png",
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
			fr: "Lancez une pièce. Si c’est face, soignez 60 dégâts et retirez tous les États Spéciaux de l’un de vos Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
