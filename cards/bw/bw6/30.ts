import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-30",
	localId: 30,

	// Card informations
	name: {
		en: "Sealeo",
		fr: "Phogleur",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 364,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/30/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/30/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/30/high.png",
		},
	},

	evolveFrom: {
		en: "Spheal",
		fr: "Obalie",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Ball",
			fr: "Ball'Glace",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
