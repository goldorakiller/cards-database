import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-136",
	localId: 136,

	// Card informations
	name: {
		en: "Super Boost Energy ◇",
		fr: "Énergie Super Boost ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/136/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/136/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/136/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/136/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
	},{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless. \n\nLorsque cette carte est attachée à un Pokémon de Niveau 2, elle fournit n’importe quel type d’Énergie mais ne fournit qu’une Énergie à la fois. Si vous avez au moins 3 Pokémon de Niveau 2 en jeu, elle fournit n’importe quel type d’Énergie mais elle fournit 4 Énergies à la fois.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.ENERGY,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
