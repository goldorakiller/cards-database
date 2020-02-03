import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-106",
	localId: 106,

	// Card informations
	name: {
		en: "Pikipek",
		fr: "Picassaut",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 731,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/106/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/106/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/106/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/106/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rock Smash",
			fr: "Éclate-Roc",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

