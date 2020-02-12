import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base2-31",
	localId: 31,

	// Card informations
	name: {
		en: "Vileplume",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/31/high.png",
		},
	},

	evolveFrom: {
		en: "Gloom",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},

	abilities: [{
		id: 178,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Heal",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, remove 1 damage counter from 1 of your Pokémon. This power can't be used if Vileplume is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Petal Dance",
		},
		text: {
			en: "Flip 3 coins. This attack does 40 damage times the number of heads. Vileplume is now Confused (after doing damage).",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Jungle",
		code: "base2"
	}
}

export default card
