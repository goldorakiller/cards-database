import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "si1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Exeggutor",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/si1/13/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/si1/13/high.png",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sharpshooter",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. Flip a number of coins equal to the number of Grass Energy attached to Exeggutor. This attack does 10 damage times the number of heads to that Pokémon. Don't apply Weakness and Resistance.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Southern Islands",
		code: "si1"
	}
}

export default card
