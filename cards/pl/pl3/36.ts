import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-36",
	localId: 36,

	// Card informations
	name: {
		en: "Moltres",
		fr: "Sulfura",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/36/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/36/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/36/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
			fr: "Cru-aile",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Attack",
			fr: "Pique",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

