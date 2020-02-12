import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-41",
	localId: 41,

	// Card informations
	name: {
		en: "Exeggutor δ",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/41/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/41/high.png",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Delta Circle",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Pokémon you have in play that has δ on its card.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Split Bomb",
		},
		text: {
			en: "Choose 2 of your opponent's Pokémon. This attack does 30 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
