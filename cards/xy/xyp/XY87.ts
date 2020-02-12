import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY87",
	localId: "XY87",

	// Card informations
	name: {
		en: "M Swampert-EX",
		fr: "M Laggron-EX",
	},

	hp: 220,

	type: [
		Type.WATER,
	],

	dexId: 260,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY87/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY87/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY87/high.png",
		},
	},

	evolveFrom: {
		en: "Swampert-EX",
		fr: "Laggron-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strongarm Impact",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "You may do 30 more damage. If you do, discard the top 3 cards of each player's deck.",
		},
		damage: 130
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Impact Bras d'Fer",
		},
		text: {
			fr: "Vous pouvez infliger 30 dégâts supplémentaires. Dans ce cas, défaussez les trois cartes du dessus du deck de chaque joueur.",
		},
		damage: "130+"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
