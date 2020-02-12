import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-181",
	localId: 181,

	// Card informations
	name: {
		en: "Molayne",
		fr: "Molène",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/181/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/181/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/181/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/181/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que si vous défaussez 2 cartes Énergie Metal de votre main.\n\nMélangez une carte Dresseur de votre pile de défausse avec votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
