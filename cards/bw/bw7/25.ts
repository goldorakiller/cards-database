import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-25",
	localId: 25,

	// Card informations
	name: {
		en: "Pignite",
		fr: "Grotichon",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 499,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/25/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/25/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/25/high.png",
		},
	},

	evolveFrom: {
		en: "Tepig",
		fr: "Gruikui",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Firebreathing",
			fr: "Souffle-Feu",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
