import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-35",
	localId: 35,

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
			en: "https://assets.tcgdex.net/en/ex/ex2/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/35/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Plasma",
		},
		text: {
			en: "Flip a coin. If heads, search your discard pile for a Lightning Energy card and attach it to Electabuzz.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Spear",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
