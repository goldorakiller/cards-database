import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-74",
	localId: 74,

	// Card informations
	name: {
		en: "Koffing",
		fr: "Smogo",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 109,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/74/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/74/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/74/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/74/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 104,
		name: "Lee HyunJung"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Smogscreen",
			fr: "Para-brouillard",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. S'il essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
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
