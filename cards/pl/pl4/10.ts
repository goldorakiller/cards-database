import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-10",
	localId: 10,

	// Card informations
	name: {
		en: "Tangrowth",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 465,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/10/high.png",
		},
	},

	evolveFrom: {
		en: "Tangela",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Guard",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Tangrowth by attacks is reduced by 20 (after applying Weakness and Resistance).",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swallow Up",
		},
		text: {
			en: "Before doing damage, count the remaining HP of the Defending Pokémon and Tangrowth. If the Defending Pokémon has fewer remaining HP than Tangrowth's, this attack does 120 damage instead.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
