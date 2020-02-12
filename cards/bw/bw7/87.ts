import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-87",
	localId: 87,

	// Card informations
	name: {
		en: "Mienfoo",
		fr: "Kungfouine",
	},

	hp: 50,

	type: [
		Type.FIGHTING,
	],

	dexId: 619,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/87/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/87/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/87/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
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
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
