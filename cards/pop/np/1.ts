import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "np-1",
	localId: 1,

	// Card informations
	name: {
		en: "Kyogre ex",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/np/1/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/np/1/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Major Flood",
		},
		text: {
			en: "Discard a Water Energy card attached to Kyogre ex. Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Nintendo Black Star Promos",
		code: "np"
	}
}

export default card
