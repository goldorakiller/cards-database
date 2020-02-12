import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-57",
	localId: 57,

	// Card informations
	name: {
		en: "Burmy Sandy Cloak",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 412,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/57/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/57/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},

	abilities: [{
		id: 157,
		type: AbilityType.POKEBODY,
		name: {
			en: "Cloak Evolution",
		},
		text: {
			en: "Burmy Sandy Cloak can evolve during the turn you play it.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
