import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-15",
	localId: 15,

	// Card informations
	name: {
		en: "Dewgong δ",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 87,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/15/high.png",
		},
	},

	evolveFrom: {
		en: "Seel",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 76,
		type: AbilityType.POKEBODY,
		name: {
			en: "Delta Protection",
		},
		text: {
			en: "Any damage done to Dewgong by attacks from your opponent's Pokémon that has δ on its card is reduced by 40 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Beam",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surge",
		},
		text: {
			en: "If Dewgong has at least 2 Water Energy attached to it, this attack does 40 damage plus 20 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
