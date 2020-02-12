import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-104",
	localId: 104,

	// Card informations
	name: {
		en: "Strong Energy",
		fr: "Énergie Renforcée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/104/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/104/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/104/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/104/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte ne peut être attachée qu'à un Pokémon Fighting. Cette carte ne fournit de l'Énergie Fighting que pendant qu'elle est attachée à un Pokémon Fighting. \n\nLes attaques du Pokémon Fighting auquel cette carte est attachée infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). \n\n(Si cette carte est attachée à autre chose qu'un Pokémon Fighting, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
