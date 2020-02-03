import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-12",
	localId: 12,

	// Card informations
	name: {
		en: "Zapdos G",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 145,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/12/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 84,
		name: "Ryota Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Charge Beam",
		},
		text: {
			en: "Flip a coin. If heads, search your discard pile for an Energy card and attach it to Zapdos .",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Strike",
		},
		text: {
			en: "You may discard all Lightning Energy attached to Zapdos . If you do, this attack's base damage is 80 instead of 40.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card

