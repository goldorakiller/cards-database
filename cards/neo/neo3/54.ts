import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-54",
	localId: 54,

	// Card informations
	name: {
		en: "Smoochum",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	dexId: 238,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/54/high.png",
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
			en: "Psykiss",
		},
		text: {
			en: "Flip a coin. If heads, choose a Special Energy card attached to 1 of your opponent's Pokémon. Your opponent shuffles that card into his or her deck.",
		},
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card

