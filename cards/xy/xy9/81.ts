import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-81",
	localId: 81,

	// Card informations
	name: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 35,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/81/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/81/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/81/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/81/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Sing",
			fr: "Berceuse",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
		},
		text: {
			en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
