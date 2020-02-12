import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-128",
	localId: 128,

	// Card informations
	name: {
		en: "Wishful Baton",
		fr: "Relais Optimiste",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/128/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/128/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/128/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/128/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon auquel cette carte est attachée est votre Pokémon Actif et qu’il est mis K.O. par les dégâts d’une attaque de votre adversaire, déplacez jusqu’à 3 cartes Énergie de base de ce Pokémon à l’un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
