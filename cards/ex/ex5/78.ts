import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-78",
	localId: 78,

	// Card informations
	name: {
		en: "Togepi",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 175,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/78/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 16,
		name: "Nakaoka"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sleepy Song",
		},
		text: {
			en: "Each Defending Pokémon is now Asleep.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
