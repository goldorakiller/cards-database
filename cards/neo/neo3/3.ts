import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-3",
	localId: 3,

	// Card informations
	name: {
		en: "Celebi",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/3/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 60,
		name: "Hironobu Yoshida"
	},

	abilities: [{
		id: 7,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Time Travel",
		},
		text: {
			en: "If an opponent's attack would Knock Out Celebi, flip a coin. If heads, Celebi is not Knocked Out and you shuffle it and all cards attached to it into your deck. This power doesn't work if Celebi is already Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psychic Damage",
		},
		text: {
			en: "Flip 3 coins. For each heads, put 1 damage counter on the Defending Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
