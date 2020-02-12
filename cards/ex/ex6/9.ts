import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-9",
	localId: 9,

	// Card informations
	name: {
		en: "Nidoqueen",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 31,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/9/high.png",
		},
	},

	evolveFrom: {
		en: "Nidorina",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},

	abilities: [{
		id: 125,
		type: AbilityType.POKEBODY,
		name: {
			en: "Family Bonds",
		},
		text: {
			en: "As long as Nidoqueen is in play, the Retreat Cost for Nidoran ♀, Nidorina, Nidoran ♂, Nidorino and Nidoking is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Toxic",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Lariat",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Evolved Pokémon you have in play.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
