import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-65",
	localId: 65,

	// Card informations
	name: {
		en: "Blaine's Vulpix",
	},

	hp: 40,

	type: [
		Type.FIRE,
	],

	dexId: 37,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 1022,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Natural Healing",
		},
		text: {
			en: "Once during your turn (before your attack), you may remove 1 damage counter from Blaine's Vulpix. This power can't be used if Blaine's Vulpix is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Fan",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
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
