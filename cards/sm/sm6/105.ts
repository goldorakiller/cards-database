import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-105",
	localId: 105,

	// Card informations
	name: {
		en: "Diantha",
		fr: "Dianthéa",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/105/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/105/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/105/high.png",
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
			fr: "Vous ne pouvez jouer cette carte que si l’un de vos Pokémon Fairy a été mis K.O. pendant le dernier tour de votre adversaire.\n\nAjoutez 2 cartes de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

