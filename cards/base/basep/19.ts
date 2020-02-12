import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "basep-19",
	localId: 19,

	// Card informations
	name: {
		en: "Sabrina's Abra",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 63,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/19/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pound",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Synchronize",
		},
		text: {
			en: "This attack can't be used unless Sabrina's Abra and the Defending Pokémon have the same number of Energy cards attached to them.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
