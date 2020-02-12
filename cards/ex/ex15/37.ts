import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-37",
	localId: 37,

	// Card informations
	name: {
		en: "Seadra δ",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 117,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/37/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/37/high.png",
		},
	},

	evolveFrom: {
		en: "Horsea",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 55,
		name: "Hisao Nakamura"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extra Ball",
		},
		text: {
			en: "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 30 more damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
