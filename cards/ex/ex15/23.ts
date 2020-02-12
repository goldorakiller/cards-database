import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-23",
	localId: 23,

	// Card informations
	name: {
		en: "Tropius δ",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 357,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/23/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/23/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 109,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Tropical Heal",
		},
		text: {
			en: "Once during your turn, when you put Tropius from your hand onto your Bench, you may remove all Special Conditions, Imprison markers, and Shock-wave markers from your Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Grind",
		},
		text: {
			en: "Does 10 damage times the amount of Energy attached to Tropius.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
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
