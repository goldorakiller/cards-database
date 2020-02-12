import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-93",
	localId: 93,

	// Card informations
	name: {
		en: "Rayquaza",
	},

	hp: 120,

	type: [
		Type.DRAGON,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/93/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/93/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Pulse",
		},
		text: {
			en: "Discard the top 2 cards of your deck.",
		},
		damage: 40
	},{
		cost: [
			Type.FIRE,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Shred",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on the Defending Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
