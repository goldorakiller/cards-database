import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-125",
	localId: 125,

	// Card informations
	name: {
		en: "Roseanne's Research",
		fr: "La recherche de Rose",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/125/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/125/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/125/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/125/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez dans votre deck n'importe quelle combinaison de jusqu'à 2 Pokémon de base et cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
