import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-7",
	localId: 7,

	// Card informations
	name: {
		en: "Dustox",
		fr: "Papinox",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 269,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/7/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/7/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/7/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/7/high.png",
		},
	},

	evolveFrom: {
		en: "Cascoon",
		fr: "Blindalys",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Twilight Poison",
			fr: "Poison Nocturne",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
