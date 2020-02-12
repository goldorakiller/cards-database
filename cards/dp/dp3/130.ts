import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-130",
	localId: 130,

	// Card informations
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/130/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/130/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/130/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/130/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 51,
		name: "Takumi Akabane"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Les dégâts infligés par des attaques au Pokémon auquel Énergie Métal est attachée sont réduits de 10 (après application de la Faiblesse et de la Résistance). Ignorez cet effet si le Pokémon auquel Énergie Métal est attachée n'est pas Metal. Énergie Métal fournit de l'Énergie Metal. (Elle ne compte pas comme carte Énergie de base.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
