import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-23",
	localId: 23,

	// Card informations
	name: {
		en: "Ampharos",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/23/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/23/high.png",
		},
	},

	evolveFrom: {
		en: "Flaaffy",
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
			Type.LIGHTNING
		],
		name: {
			en: "Acceleration Bolt",
		},
		text: {
			en: "Search your deck for up to 2 basic Energy cards and attach them to 1 of your Pokémon. Shuffle your deck afterward.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder",
		},
		text: {
			en: "Flip a coin. If tails, Ampharos does 20 damage to itself.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
