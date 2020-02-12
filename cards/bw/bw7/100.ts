import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-100",
	localId: 100,

	// Card informations
	name: {
		en: "Black Kyurem",
		fr: "Kyurem Noir",
	},

	hp: 130,

	type: [
		Type.DRAGON,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/100/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/100/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/100/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Dual Claw",
			fr: "Paire de Griffes",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flash Freeze",
			fr: "Tonnerre de Glace",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
