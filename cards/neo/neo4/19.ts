import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo4-19",
	localId: 19,

	// Card informations
	name: {
		en: "Dark Omastar",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 139,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo4/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo4/19/high.png",
		},
	},

	evolveFrom: {
		en: "Omanyte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Prehistoric Water",
		},
		text: {
			en: "If your opponent has any evolved Pokémon in play, choose 1 of them and flip a coin. If heads, your opponent takes the highest Stage Evolution card on that Pokémon and shuffles it into his or her deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dark Tentacle",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon can't evolve except from effects of attacks or Pokémon Powers. (Benching that Pokémon ends this effect.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Destiny",
		code: "neo4"
	}
}

export default card
