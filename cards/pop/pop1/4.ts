import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop1-4",
	localId: 4,

	// Card informations
	name: {
		en: "Sceptile",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop1/4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop1/4/high.png",
		},
	},

	evolveFrom: {
		en: "Grovyle",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Cling",
		},
		text: {
			en: "After your attack, remove from Sceptile the number of damage counters equal to the damage you did to the Defending Pokémon. If Sceptile has fewer damage counters than that, remove all of them.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Blade",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 1",
		code: "pop1"
	}
}

export default card
