import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-183",
	localId: 183,

	// Card informations
	name: {
		en: "Rainbow Energy",
		fr: "Énergie Multicolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/183/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/183/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/183/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/183/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless. Tant que cette carte est en jeu, elle fournit n’importe quel type d’Énergie mais ne fournit qu’une Énergie à la fois. Lorsque vous attachez cette carte de votre main à l’un de vos Pokémon, placez 1 marqueur de dégâts sur ce Pokémon.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.ENERGY,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
