import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-9",
	localId: 9,

	// Card informations
	name: {
		en: "Lugia",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/9/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 60,
		name: "Hironobu Yoshida"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Elemental Blast",
		},
		text: {
			en: "Discard a Energy card, a Energy card, and a Energy card attached to Lugia in order to use this attack.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
