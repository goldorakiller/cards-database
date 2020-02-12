import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-43",
	localId: 43,

	// Card informations
	name: {
		en: "Omastar",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 139,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/43/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/43/high.png",
		},
	},

	evolveFrom: {
		en: "Omanyte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 119,
		name: "Shin-ichi Yoshida"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Squeeze",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Paralyzed. If tails, this attack does 10 damage.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Spike Barrage",
		},
		text: {
			en: "Flip a number of coins equal to the number of Energy attached to Omastar. This attack does 20 damage plus 20 more for each heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
