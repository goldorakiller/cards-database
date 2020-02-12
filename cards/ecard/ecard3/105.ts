import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-105",
	localId: 105,

	// Card informations
	name: {
		en: "Sunflora",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 192,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/105/high.png",
		},
	},

	evolveFrom: {
		en: "Sunkern",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Plant",
		},
		text: {
			en: "Search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Trip Over",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
