import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-6",
	localId: 6,

	// Card informations
	name: {
		en: "Pinsir-GX",
		fr: "Scarabrute-GX",
	},

	hp: 180,

	type: [
		Type.GRASS,
	],

	dexId: 127,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/6/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/6/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/6/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Superpowered Horns",
			fr: "Cornes Surpuissantes",
		},
		damage: 110
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Guillotine-GX",
			fr: "Guillotine-GX",
		},
		text: {
			en: "(You can't use more than 1 GX attack in a game.)",
			fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
