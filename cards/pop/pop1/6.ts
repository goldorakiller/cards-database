import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Beautifly",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 267,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop1/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop1/6/high.png",
		},
	},

	evolveFrom: {
		en: "Silcoon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Blot",
		},
		text: {
			en: "Remove 1 damage counter from Beautifly.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 1",
		code: "pop1"
	}
}

export default card
