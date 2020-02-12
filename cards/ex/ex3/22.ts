import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-22",
	localId: 22,

	// Card informations
	name: {
		en: "Vibrava",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 329,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/22/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/22/high.png",
		},
	},

	evolveFrom: {
		en: "Trapinch",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Charge",
		},
		text: {
			en: "Search your deck for up to 3 different types of basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Spark",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance to Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIRE,
		value: "-30"
	},{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
