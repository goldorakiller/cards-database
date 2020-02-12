import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-30",
	localId: 30,

	// Card informations
	name: {
		en: "Flaaffy δ",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 180,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/30/high.png",
		},
	},

	evolveFrom: {
		en: "Mareep",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thundershock",
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





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
