import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-68",
	localId: 68,

	// Card informations
	name: {
		en: "Nidoqueen",
		fr: "Nidoqueen",
	},

	hp: 140,

	type: [
		Type.PSYCHIC,
	],

	dexId: 31,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/68/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/68/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/68/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/68/high.png",
		},
	},

	evolveFrom: {
		en: "Nidorina",
		fr: "Nidorina",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Double Kick",
			fr: "Double Pied",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Fang",
			fr: "Crochet Venin",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
