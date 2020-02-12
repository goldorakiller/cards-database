import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-84",
	localId: 84,

	// Card informations
	name: {
		en: "Healing Scarf",
		fr: "Foulard Apaisant",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/84/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/84/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/84/high.png",
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
			fr: "Chaque fois que vous attachez une carte Énergie de votre main au Pokémon auquel cette carte est attachée, soignez 20 dégâts à ce Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
