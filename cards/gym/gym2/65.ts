import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-65",
	localId: 65,

	// Card informations
	name: {
		en: "Blaine's Rhyhorn",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 111,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Horn Charge",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Overrun",
		},
		text: {
			en: "Flip a coin. If heads and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
