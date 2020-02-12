import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-52",
	localId: 52,

	// Card informations
	name: {
		en: "Mankey",
		fr: "Férosinge",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 56,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/52/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/52/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/52/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/52/high.png",
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
			Type.COLORLESS
		],
		name: {
			en: "Focus Energy",
			fr: "Puissance",
		},
		text: {
			en: "During your next turn, this Pokémon's Flop attack's base damage is 50.",
			fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Flop de ce Pokémon sont de 50.",
		},
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Flop",
			fr: "Flop",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
