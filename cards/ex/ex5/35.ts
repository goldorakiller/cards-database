import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-35",
	localId: 35,

	// Card informations
	name: {
		en: "Gloom",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 44,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/35/high.png",
		},
	},

	evolveFrom: {
		en: "Oddish",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Cling",
		},
		text: {
			en: "After your attack, remove from Gloom the number of damage counters equal to the damage you did to the Defending Pokémon. If Gloom has fewer damage counters than that, remove all of them.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Razor Leaf",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
