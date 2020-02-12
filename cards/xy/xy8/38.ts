import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-38",
	localId: 38,

	// Card informations
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/38/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/38/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/38/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/38/high.png",
		},
	},

	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},

	abilities: [{
		id: 808,
		type: AbilityType.TALENT,
		name: {
			en: "Dignified Fighter",
			fr: "Combattant Estimé",
		},
		text: {
			en: "Each of your Basic Pokémon's attacks does 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon de base infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
