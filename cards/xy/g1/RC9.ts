import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC9",
	localId: "RC9",

	// Card informations
	name: {
		en: "Raichu",
		fr: "Raichu",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC9/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC9/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC9/high.png",
		},
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Circle Circuit",
			fr: "Cercle Électrik",
		},
		text: {
			en: "This attack does 20 damage times the number of your Benched Pokémon.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de vos Pokémon de Banc.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
		},
		text: {
			en: "Discard all Energy attached to this Pokémon.",
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
