import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM204",
	localId: "SM204",

	// Card informations
	name: {
		en: "Necrozma",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 800,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM204/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM204/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Barrier Attack",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Special Laser",
		},
		text: {
			en: "If this Pokémon has any Special Energy attached to it, this attack does 60 more damage.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
