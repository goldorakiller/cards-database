import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-73",
	localId: 73,

	// Card informations
	name: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 14,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/73/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/73/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/73/high.png",
		},
	},

	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {
			en: "Stiffen",
			fr: "Raidir",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Kakuna by attacks is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Coconfort par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Spit Poison",
			fr: "Crache-venin",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
