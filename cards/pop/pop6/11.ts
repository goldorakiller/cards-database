import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop6-11",
	localId: 11,

	// Card informations
	name: {
		en: "Bidoof",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 399,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop6/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop6/11/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Amnesia",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scavenge",
		},
		text: {
			en: "Search your discard pile for a Trainer card, show it to your opponent, and put it into your hand.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "POP Series 6",
		code: "pop6"
	}
}

export default card
