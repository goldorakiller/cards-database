import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-67",
	localId: 67,

	// Card informations
	name: {
		en: "Cresselia-EX",
		fr: "Cresselia-EX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 488,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/67/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/67/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/67/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/67/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},

	abilities: [{
		id: 413,
		type: AbilityType.TALENT,
		name: {
			en: "Sparkling Particles",
			fr: "Particules Étincelantes",
		},
		text: {
			en: "At any time between turns, heal 10 damage from this Pokémon.",
			fr: "N'importe quand entre chaque tour, soignez 10 dégâts à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Protection",
			fr: "Protection Psy",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon has no Weakness.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card

