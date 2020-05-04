import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop3-9",
	localId: 9,

	// Card informations
	name: {
		en: "Forretress",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 205,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop3/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop3/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Toxic",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "POP Series 3",
		code: "pop3"
	}
}

export default card
