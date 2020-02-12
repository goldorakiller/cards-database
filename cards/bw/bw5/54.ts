import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-54",
	localId: 54,

	// Card informations
	name: {
		en: "Groudon-EX",
	},

	hp: 180,

	type: [
		Type.FIGHTING,
	],

	dexId: 383,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/54/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Tromp",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Giant Claw",
		},
		text: {
			en: "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 40 more damage.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
