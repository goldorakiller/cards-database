import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-51",
	localId: 51,

	// Card informations
	name: {
		en: "Pupitar δ",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 247,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/51/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/51/high.png",
		},
	},

	evolveFrom: {
		en: "Larvitar",
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
			Type.COLORLESS
		],
		name: {
			en: "Paralyzing Gaze",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-edge",
		},
		text: {
			en: "Pupitar does 10 damage to itself.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
