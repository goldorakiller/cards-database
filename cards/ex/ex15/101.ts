import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-101",
	localId: 101,

	// Card informations
	name: {
		en: "Mew Star δ",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/101/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mimicry",
		},
		text: {
			en: "Choose an attack on 1 of your opponent's Pokémon in play. Mimicry copies that attack. This attack does nothing if Mew Star doesn't have the Energy necessary to use that attack. (You must still do anything else required for that attack.) Mew Star performs that attack.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rainbow Wave",
		},
		text: {
			en: "Choose 1 basic Energy card attached to Mew Star. This attack does 20 damage to each of your opponent's Pokémon that is the same type as the basic Energy card that you chose. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
