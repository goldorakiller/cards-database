import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym2-5",
	localId: 5,

	// Card informations
	name: {
		en: "Giovanni's Gyarados",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym2/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym2/5/high",
		},
	},

	evolveFrom: {
		en: "Magikarp",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Summon Storm",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, this attack does 20 damage to each other Pokémon (even your own). Don't apply Weakness and Resistance for this attack.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Tornado",
		},
		text: {
			en: "Unless this attack Knocks Out the Defending Pokémon, choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Gym Challenge",
		code: "gym2"
	}
}

export default card
