import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-122",
	localId: 122,

	// Card informations
	name: {
		en: "Escape Board",
		fr: "Skateboard Évasion",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/122/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/122/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/122/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/122/high.png",
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
			fr: "Le Coût de Retraite du Pokémon auquel cette carte est attachée est diminué de Colorless et il peut battre en retraite même s’il est Endormi ou Paralysé.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
