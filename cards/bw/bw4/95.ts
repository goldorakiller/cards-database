import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-95",
	localId: 95,

	// Card informations
	name: {
		en: "Reshiram-EX",
		fr: "Reshiram-EX",
	},

	hp: 180,

	type: [
		Type.FIRE,
	],

	dexId: 643,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/95/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/95/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/95/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/95/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Glinting Claw",
			fr: "Griffe Scintillante",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brave Fire",
			fr: "Flammes de Bravoure",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 50 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 50 dégâts.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
