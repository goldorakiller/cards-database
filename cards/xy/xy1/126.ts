import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-126",
	localId: 126,

	// Card informations
	name: {
		en: "Shadow Circle",
		fr: "Cercle des Ombres",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/126/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/126/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/126/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/126/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chacun des Pokémon auquel de l'Énergie Darkness est attachée (les vôtres et ceux de votre adversaire) n'a pas de Faiblesse.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
