import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-52",
	localId: 52,

	// Card informations
	name: {
		en: "Baltoy",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 343,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/52/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/52/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psyshock",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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
