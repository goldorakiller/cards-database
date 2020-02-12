import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Steelix",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 208,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/15/high.png",
		},
	},

	evolveFrom: {
		en: "Onix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Crush",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage; if tails, this attack does 30 damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
