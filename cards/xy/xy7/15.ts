import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-15",
	localId: 15,

	// Card informations
	name: {
		en: "Entei",
		fr: "Entei",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 244,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/15/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/15/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/15/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flame Screen",
			fr: "Double Θ",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Tackle",
			fr: "Barrière de Flammes",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 130
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Charge Énergétique",
		},
		text: {
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
