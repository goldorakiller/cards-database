import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-20",
	localId: 20,

	// Card informations
	name: {
		en: "Masquerain",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 284,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/20/high.png",
		},
	},

	evolveFrom: {
		en: "Surskit",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Silver Wind",
		},
		text: {
			en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 30 more damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
