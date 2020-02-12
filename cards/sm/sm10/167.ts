import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-167",
	localId: 167,

	// Card informations
	name: {
		en: "Dusk Stone",
		fr: "Pierre Nuit",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/167/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/167/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/167/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/167/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck, y compris parmi les Pokémon-GX, un Magirêve, Corboss, Lugulabre ou Exagide qui évolue de l’un de vos Pokémon en jeu, puis placez-le sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck. Vous pouvez utiliser cette carte pendant votre premier tour ou sur un Pokémon qui a été joué pendant ce tour.",
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
