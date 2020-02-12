import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-34",
	localId: 34,

	// Card informations
	name: {
		en: "Glalie",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 362,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/34/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/34/high.png",
		},
	},

	evolveFrom: {
		en: "Snorunt",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 530,
		type: AbilityType.POKEBODY,
		name: {
			en: "Ice Wall",
		},
		text: {
			en: "Any damage done to Glalie by attacks from your opponent's Pokémon with any Special Energy cards attached to it is reduced by 40 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Blizzard",
		},
		text: {
			en: "Flip a coin. If heads, put 1 damage counter on each of your opponent's Benched Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
