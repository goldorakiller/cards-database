import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-46",
	localId: 46,

	// Card informations
	name: {
		en: "Haunter",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 93,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/46/high",
		},
	},

	evolveFrom: {
		en: "Gastly",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 684,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Transparency",
		},
		text: {
			en: "Whenever an attack does anything to Haunter, flip a coin. If heads, prevent all effects of that attack, including damage, done to Haunter. This power stops working while Haunter is Asleep.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Nightmare",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 10
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card
