import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-86",
	localId: 86,

	// Card informations
	name: {
		en: "Meloetta",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 648,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Magical Dance",
		},
		text: {
			en: "Heal 30 damage from each of your Benched Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shooting Star Pirouette",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
