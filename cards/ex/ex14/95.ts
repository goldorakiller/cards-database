import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-95",
	localId: 95,

	// Card informations
	name: {
		en: "Kyogre ex",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/95/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 185,
		name: "Yasuki Watanabe"
	},

	abilities: [{
		id: 949,
		type: AbilityType.POKEBODY,
		name: {
			en: "Flotation",
		},
		text: {
			en: "As long as Kyogre ex has 1 Energy or less attached to it, the Retreat Cost for each of your Kyogre ex is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Shot",
		},
		text: {
			en: "Discard 2 Energy attached to Kyogre ex. Choose 1 of your opponent's Pokémon. This attack does 70 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
