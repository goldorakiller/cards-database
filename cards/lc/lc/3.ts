import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "lc-3",
	localId: 3,

	// Card informations
	name: {
		en: "Charizard",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/lc/lc/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/lc/lc/3/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 263,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Burn",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into R for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fire Spin",
		},
		text: {
			en: "Discard 2 Energy cards attached to Charizard in order to use this attack.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legendary Collection",
		code: "lc"
	}
}

export default card
