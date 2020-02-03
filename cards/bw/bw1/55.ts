import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-55",
	localId: 55,

	// Card informations
	name: {
		en: "Solosis",
		fr: "Nucléos",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	dexId: 577,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/55/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/55/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/55/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/55/high.png",
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
			Type.PSYCHIC
		],
		name: {
			en: "Cell Culture",
			fr: "Culture Cellulaire",
		},
		text: {
			en: "Search your deck for Solosis and put it onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez Nucléos dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
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

