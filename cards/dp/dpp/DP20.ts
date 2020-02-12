import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dpp-DP20",
	localId: "DP20",

	// Card informations
	name: {
		en: "Magmortar",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 467,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dpp/DP20/high.png",
		},
	},

	evolveFrom: {
		en: "Magmar",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 33,
		name: "Hiroaki Ito"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Smoke Bomb",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin.  If tails, that attack does nothing.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flame Drum",
		},
		text: {
			en: "If Magby isn't anywhere under Magmortar, discard 2 Energy cards from your hand. (If you can't discard 2 Energy cards from your hand, this attack does nothing.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "DP Black Star Promos",
		code: "dpp"
	}
}

export default card
