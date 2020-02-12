import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY113",
	localId: "XY113",

	// Card informations
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 490,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY113/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY113/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY113/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY113/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Marine Guidance",
			fr: "Guide Maritime",
		},
		text: {
			en: "Search your deck for a Water Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez un Pokémon Water dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Aqua Ring",
			fr: "Anneau Hydro",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
