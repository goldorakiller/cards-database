import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-86",
	localId: 86,

	// Card informations
	name: {
		en: "Reversal Trigger",
		fr: "Déclencheur Inversé",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/86/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/86/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lorsque le Pokémon de la Team Plasma auquel cette carte est attachée est mis K.O. par les dégâts d'une attaque de votre adversaire, cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card

