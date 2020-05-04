import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-33",
	localId: 33,

	// Card informations
	name: {
		en: "Dark Exeggutor",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/33/high",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Toshinao Aoki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Triple Headbutt",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "MAX Burst",
		},
		text: {
			en: "Flip a number of coins equal to the number of Energy cards attached to your opponent's Pokémon. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
