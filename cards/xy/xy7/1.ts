import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-1",
	localId: 1,

	// Card informations
	name: {
		en: "Oddish",
		fr: "Mystherbe",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 43,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/1/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/1/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/1/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/1/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Trip Over",
			fr: "Croche-Pied",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card

