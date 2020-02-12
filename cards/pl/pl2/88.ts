import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-88",
	localId: 88,

	// Card informations
	name: {
		en: "Aaron's Collection",
		fr: "La collection d'Aaron",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/88/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/88/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/88/high.png",
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
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Choisissez dans votre pile de défausse n'importe quelle combinaison de jusqu'à 2 Pokémon SP et cartes Énergie de base. Montrez-les à votre adversaire et placez-les dans votre main.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
