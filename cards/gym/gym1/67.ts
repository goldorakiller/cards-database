import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-67",
	localId: 67,

	// Card informations
	name: {
		en: "Brock's Mankey",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 56,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Taunt",
		},
		text: {
			en: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Light Kick",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
