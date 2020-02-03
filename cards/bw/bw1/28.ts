import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-28",
	localId: 28,

	// Card informations
	name: {
		en: "Oshawott",
		fr: "Moustillon",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 501,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/28/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/28/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/28/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/28/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Razor Shell",
			fr: "Coquilame",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card

