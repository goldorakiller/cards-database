import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-121",
	localId: 121,

	// Card informations
	name: {
		en: "Rainbow Energy",
		fr: "Énergie Multicolore",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/121/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/121/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/121/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",



	attacks: [{
		name: {},
		text: {
			fr: "Attachez Énergie multicolore à 1 de vos Pokémon. Lorsqu'elle est en jeu, Énergie multicolore fournit tous les types d'Énergie mais seulement 1 Énergie à la fois. (Elle n'a pas d'autre effet que de fournir de l'Énergie.) Lorsque vous attachez cette carte de votre main à 1 de vos Pokémon, placez 1 marqueur de dégât sur ce Pokémon.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
