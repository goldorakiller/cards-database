import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-93",
	localId: 93,

	// Card informations
	name: {
		en: "Sandslash",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 28,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/93/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/93/high.png",
		},
	},

	evolveFrom: {
		en: "Sandshrew",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sand Trap",
		},
		text: {
			en: "If your opponent has any Benched Pokémon, choose up to 2 of them. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Needle Rush",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get at least 1 heads, the Defending Pokémon is now Poisoned.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
