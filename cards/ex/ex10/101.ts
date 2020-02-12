import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-101",
	localId: 101,

	// Card informations
	name: {
		en: "Blissey ex",
	},

	hp: 160,

	type: [
		Type.COLORLESS,
	],

	dexId: 242,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/101/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/101/high.png",
		},
	},

	evolveFrom: {
		en: "Chansey ex",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 1183,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Blissful Support",
		},
		text: {
			en: "Once during your turn, when you play Blissey ex from your hand to evolve 1 of your Pokémon, you may discard all Energy cards attached to any number of your Pokémon and remove all damage counters from those Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Absorption",
		},
		text: {
			en: "Attach up to 3 Energy cards from your discard pile to Blissey ex.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Roll Out",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
