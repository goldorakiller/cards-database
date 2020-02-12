import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "basep-46",
	localId: 46,

	// Card informations
	name: {
		en: "Electabuzz",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 125,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/46/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/46/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Lightning Rod",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon and put a Lightning Rod marker on it. (A Pokémon can have only 1 Lightning Rod marker on it at a time.)",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Lightning Bolt",
		},
		text: {
			en: "This attack does 20 damage to any Pokémon with a Lightning Rod counter on it. Apply Weakness and Resistance.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
