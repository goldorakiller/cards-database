import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-72",
	localId: 72,

	// Card informations
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 129,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/72/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/72/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/72/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/72/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Splash",
			fr: "Trempette",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
