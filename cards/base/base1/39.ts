import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-39",
	localId: 39,

	// Card informations
	name: {
		en: "Porygon",
	},

	hp: 30,

	type: [
		Type.COLORLESS,
	],

	dexId: 137,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/39/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/39/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 106,
		name: "Tomoaki Imakuni"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Conversion 1",
		},
		text: {
			en: "If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Conversion 2",
		},
		text: {
			en: "Change Porygon's Resistance to a type of your choice other than Colorless.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card
