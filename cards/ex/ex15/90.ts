import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-90",
	localId: 90,

	// Card informations
	name: {
		en: "Altaria ex δ",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/90/high.png",
		},
	},

	evolveFrom: {
		en: "Swablu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 89,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Extra Boost",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a basic Energy card from your hand to 1 of your Stage 2 Pokémon-ex. This power can't be used if Altaria ex is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Healing Light",
		},
		text: {
			en: "Remove 1 damage counter from each of your Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
