import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-66",
	localId: 66,

	// Card informations
	name: {
		en: "Kakuna",
		fr: "Coconfort Niv. 8",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 14,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/66/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/66/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/66/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/66/high.png",
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
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 276,
		type: AbilityType.POKEBODY,
		name: {
			en: "Exoskeleton",
			fr: "Exosquelette",
		},
		text: {
			en: "Any damage done to Kakuna by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Tous dégâts infligés à Coconfort par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Dangerous Evolution",
			fr: "Évolution dangereuse",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, search your deck for an Evolution card that evolves from Kakuna and put it onto Kakuna. (This counts as evolving Kakuna.) Shuffle your deck afterward.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, choisissez dans votre deck une carte Évolution qui évolue de Coconfort et placez-la sur Coconfort. (Vous le faites ainsi évoluer). Ensuite, mélangez votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
