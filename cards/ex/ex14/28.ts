import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-28",
	localId: 28,

	// Card informations
	name: {
		en: "Venusaur",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 3,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/28/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/28/high.png",
		},
	},

	evolveFrom: {
		en: "Ivysaur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 735,
		type: AbilityType.POKEBODY,
		name: {
			en: "Chlorophyll",
		},
		text: {
			en: "All Energy cards that provide only Colorless Energy attached to your Grass Pokémon provide Grass Energy instead.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Green Blast",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Toxic Sleep",
		},
		text: {
			en: "The Defending Pokémon is now Asleep and Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
