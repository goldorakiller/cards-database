import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-35",
	localId: 35,

	// Card informations
	name: {
		en: "M Gallade-EX",
		fr: "M Gallame-EX",
	},

	hp: 220,

	type: [
		Type.PSYCHIC,
	],

	dexId: 475,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/35/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/35/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/35/high.png",
		},
	},

	evolveFrom: {
		en: "Gallade-EX",
		fr: "Gallame-EX",
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
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Unwavering Blade",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "This attack does 30 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 110
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			fr: "Lame Impitoyable",
		},
		text: {
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
