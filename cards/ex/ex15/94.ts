import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-94",
	localId: 94,

	// Card informations
	name: {
		en: "Kingdra ex δ",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/94/high.png",
		},
	},

	evolveFrom: {
		en: "Seadra",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 34,
		name: "Masahiko Ishii"
	},

	abilities: [{
		id: 965,
		type: AbilityType.POKEBODY,
		name: {
			en: "Extra Smoke",
		},
		text: {
			en: "Any damage done to your Stage 2 Pokémon-ex by your opponent's attacks is reduced by 10 (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Energy Link",
		},
		text: {
			en: "Search your discard pile for an Energy card and attach it to Kingdra ex.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Protective Swirl",
		},
		text: {
			en: "Kingdra ex has no Weakness during your opponent's next turn.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
