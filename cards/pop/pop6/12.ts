import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop6-12",
	localId: 12,

	// Card informations
	name: {
		en: "Buneary",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 427,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop6/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop6/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Splash",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jump Kick",
		},
		text: {
			en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 10
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
