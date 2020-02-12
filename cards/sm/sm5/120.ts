import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-120",
	localId: 120,

	// Card informations
	name: {
		en: "Cyrus ◇",
		fr: "Hélio ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/120/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/120/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/120/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/120/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
	},{
		name: {},
		text: {
			fr: "Vous ne pouvez pas jouer cette carte si vous n’avez pas de Pokémon Water ou Metal en jeu.\n\nVotre adversaire choisit 2 Pokémon de Banc et mélange les autres, et toutes les cartes qui leur sont attachées, dans son deck.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
