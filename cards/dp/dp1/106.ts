import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-106",
	localId: 106,

	// Card informations
	name: {
		en: "Energy Restore",
		fr: "Restauration d'énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/106/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/106/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/106/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/106/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 125,
		name: "Hideyuki Nakajima"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez 3 pièces. Pour chaque face, placez une carte Énergie de votre pile de défausse dans votre main. Si vous n'avez pas assez de cartes Énergie de base dans votre pile de défausse, placez-les toutes dans votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
