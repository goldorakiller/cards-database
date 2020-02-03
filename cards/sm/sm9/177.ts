import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-177",
	localId: 177,

	// Card informations
	name: {
		en: "Jasmine",
		fr: "Jasmine",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/177/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/177/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/177/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/177/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez un Pokémon Metal dans votre deck, montrez-le, puis ajoutez-le à votre main. Si vous jouez en second et que c’est votre premier tour, cherchez 5 Pokémon Metal au lieu d’un. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

