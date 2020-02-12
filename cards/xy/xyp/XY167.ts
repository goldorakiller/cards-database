import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY167",
	localId: "XY167",

	// Card informations
	name: {
		en: "Garchomp-EX",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY167/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY167/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Shred",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
