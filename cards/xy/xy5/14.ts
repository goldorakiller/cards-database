import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-14",
	localId: 14,

	// Card informations
	name: {
		en: "Masquerain",
		fr: "Maskadra",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 284,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/14/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/14/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/14/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/14/high.png",
		},
	},

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Spiral Gyration",
			fr: "Rotation Spirale",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused. Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Air Slash",
			fr: "Lame d'Air",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
