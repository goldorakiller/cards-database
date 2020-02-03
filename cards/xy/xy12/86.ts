import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-86",
	localId: 86,

	// Card informations
	name: {
		en: "Slowbro Spirit Link",
		fr: "Lien Spirituel Flagadoss",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/86/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/86/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/86/high.png",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Flagadoss-EX.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card

