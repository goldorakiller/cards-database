import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY114",
	localId: "XY114",

	// Card informations
	name: {
		en: "Darkrai",
		fr: "Darkrai",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],

	dexId: 491,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY114/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY114/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY114/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY114/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Cutter",
			fr: "Tranch'Obscur",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Abyssal Sleep",
			fr: "Sommeil Abyssal",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep. Your opponent flips 2 coins instead of 1 between turns. If either of them is tails, that Pokémon is still Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Votre adversaire lance 2 pièces au lieu d'une entre chaque tour. Si vous obtenez au moins un côté pile, le Pokémon reste Endormi.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
