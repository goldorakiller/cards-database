import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-105",
	localId: 105,

	// Card informations
	name: {
		en: "Bisharp",
		fr: "Scalproie",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 625,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/105/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/105/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/105/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/105/high.png",
		},
	},

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Single Lunge",
			fr: "Allongement Simple",
		},
		text: {
			en: "If this Pokémon has no damage counters on it, this attack does 90 more damage.",
			fr: "Si ce Pokémon n’a pas de marqueur de dégâts, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Edge",
			fr: "Lame Puissante",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
