import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-20",
	localId: 20,

	// Card informations
	name: {
		en: "Azurill",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 298,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/20/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Marill from your hand onto Azurill (this counts as evolving Azurill) and remove all damage counters from Azurill.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Type Match",
		},
		text: {
			en: "Choose a basic Energy card in your hand and show it to your opponent. Then, search your deck for a Basic Pokémon or Evolution card of that Energy type, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
