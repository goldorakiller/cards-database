import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-94",
	localId: 94,

	// Card informations
	name: {
		en: "Suicune ex",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 245,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/94/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Energy Flip",
		},
		text: {
			en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon. You may move an Energy card attached to that Pokémon to another of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Reverse Stream",
		},
		text: {
			en: "You may return all basic Energy cards attached to Suicune ex to your hand. If you do, this attack does 50 damage plus 10 more damage for each basic Energy card you returned.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
