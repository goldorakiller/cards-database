import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-96",
	localId: 96,

	// Card informations
	name: {
		en: "Sceptile ex δ",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/96/high.png",
		},
	},

	evolveFrom: {
		en: "Grovyle",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 778,
		type: AbilityType.POKEBODY,
		name: {
			en: "Extra Liquid",
		},
		text: {
			en: "Each player's Pokémon-ex can't use any Poké-Powers and pays Colorless more Energy to use its attacks. Each Pokémon can't be affected by more than 1 Extra Liquid Poké-Body.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Power Revenge",
		},
		text: {
			en: "Does 60 damage plus 10 more damage for each Prize card your opponent has taken.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
