import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-100",
	localId: 100,

	// Card informations
	name: {
		en: "Celebi Star",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/100/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 7,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Time Travel",
		},
		text: {
			en: "If Celebi Star would be Knocked Out by damage from an opponent's attack, you may flip a coin. If heads, Celebi Star is not Knocked Out, discard all cards attached to Celebi Star, and put Celebi Star on the bottom of your deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Leaf Shade",
		},
		text: {
			en: "Count the amount of Energy attached to Celebi Star. Put that many damage counters on 1 of your opponent's Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card

