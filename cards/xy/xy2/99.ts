import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-99",
	localId: 99,

	// Card informations
	name: {
		en: "Ultra Ball",
		fr: "Hyper Ball",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/99/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/99/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/99/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, vous ne pouvez pas jouer cette carte.) Cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card

