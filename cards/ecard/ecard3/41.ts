import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-41",
	localId: 41,

	// Card informations
	name: {
		en: "Omanyte",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 138,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/41/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/41/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Water of Evolution",
		},
		text: {
			en: "Put an Omastar from your hand onto Omanyte. This counts as evolving Omanyte.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Drag Off",
		},
		text: {
			en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
