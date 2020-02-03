import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-120",
	localId: 120,

	// Card informations
	name: {
		en: "Mew-EX",
		fr: "Mew-EX",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/120/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/120/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/120/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/120/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 161,
		type: AbilityType.TALENT,
		name: {
			en: "Versatile",
			fr: "Polyvalent",
		},
		text: {
			en: "This Pokémon can use the attacks of any Pok��mon in play (both yours and your opponent's). (You still need the necessary Energy to use each attack.)",
			fr: "Ce Pokémon peut utiliser les attaques de n'importe quel Pokémon en jeu (les vôtres et ceux de votre adversaire). (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Replace",
			fr: "Repositionnement",
		},
		text: {
			en: "Move as many Energy attached to your Pokémon to your other Pokémon in any way you like.",
			fr: "Déplacez autant d'Énergies attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

