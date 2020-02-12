import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-4",
	localId: 4,

	// Card informations
	name: {
		en: "Delcatty",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 301,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/4/high.png",
		},
	},

	evolveFrom: {
		en: "Skitty",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},

	abilities: [{
		id: 206,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Reactive Shift",
		},
		text: {
			en: "Once during your turn (before your attack), you may move a React Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Delcatty is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Link",
		},
		text: {
			en: "Search your discard pile for an Energy card and attach it to Delcatty.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Whap",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
