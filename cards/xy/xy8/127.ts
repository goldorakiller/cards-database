import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-127",
	localId: 127,

	// Card informations
	name: {
		en: "Staraptor",
		fr: "Étouraptor",
	},

	hp: 140,

	type: [
		Type.COLORLESS,
	],

	dexId: 398,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/127/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/127/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/127/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/127/high.png",
		},
	},

	evolveFrom: {
		en: "Staravia",
		fr: "Étourvol",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cyclone Slash",
			fr: "Entaille Cyclonique",
		},
		text: {
			en: "Before doing damage, have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Avant d'infliger des dégâts, demandez à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		},
		damage: 70
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brave Bird",
			fr: "Rapace",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
