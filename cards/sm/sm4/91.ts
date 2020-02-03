import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-91",
	localId: 91,

	// Card informations
	name: {
		en: "Counter Catcher",
		fr: "Attrape-Riposte",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/91/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/91/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/91/high.png",
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
			fr: "Vous pouvez jouer cette carte seulement s’il vous reste plus de cartes Récompense que votre adversaire.\n\nÉchangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

