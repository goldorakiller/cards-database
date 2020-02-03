import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-17",
	localId: 17,

	// Card informations
	name: {
		en: "Bounsweet",
		fr: "Croquine",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 761,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/17/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/17/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/17/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/17/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Splash",
			fr: "Trempette",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

