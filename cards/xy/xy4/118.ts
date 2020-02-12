import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-118",
	localId: 118,

	// Card informations
	name: {
		en: "Lysandre's Trump Card",
		fr: "Atout de Lysandre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/118/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/118/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/118/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/118/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur mélange toutes les cartes de sa pile de défausse avec son deck (à part Atout de Lysandre).",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
