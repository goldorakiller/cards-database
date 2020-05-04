import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-38",
	localId: 38,

	// Card informations
	name: {
		en: "Lanturn",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 171,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 616,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Hydroelectric Power",
		},
		text: {
			en: "You may make Floodlight do 10 more damage for each Water Energy attached to Lanturn but not used to pay for Floodlight's Energy cost. This power can't be used if Lanturn is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Floodlight",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
