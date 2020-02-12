import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-8",
	localId: 8,

	// Card informations
	name: {
		en: "Lunatone",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 337,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/8/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 267,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Lunar Eclipse",
		},
		text: {
			en: "Once during your turn (before your attack), if Solrock is in play, you may use this power. Until the end of your turn, Lunatone's type is Darkness. This power can't be used if Lunatone is affected by a Special Condition.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cosmic Draw",
		},
		text: {
			en: "If your opponent has any Evolved Pokémon in play, draw 3 cards.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Lunar Blast",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
