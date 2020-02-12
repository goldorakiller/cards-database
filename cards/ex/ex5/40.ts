import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-40",
	localId: 40,

	// Card informations
	name: {
		en: "Luvdisc",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 370,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/40/high.png",
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
			Type.COLORLESS
		],
		name: {
			en: "Loving Draw",
		},
		text: {
			en: "Draw cards until you have the same number of cards in your hand as your opponent has in his or her hand.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Sweet Temptation",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. This attack does 10 damage to the new Defending Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
