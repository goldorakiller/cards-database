import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY105",
	localId: "XY105",

	// Card informations
	name: {
		en: "Mawile Spirit Link",
		fr: "Lien Spirituel Mysdibule",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY105/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY105/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY105/high.png",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Mysdibule-EX.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

