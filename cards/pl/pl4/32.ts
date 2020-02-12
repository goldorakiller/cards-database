import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-32",
	localId: 32,

	// Card informations
	name: {
		en: "Spiritomb",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 442,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/32/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},

	abilities: [{
		id: 293,
		type: AbilityType.POKEBODY,
		name: {
			en: "Keystone Seal",
		},
		text: {
			en: "As long as Spiritomb is your Active Pokémon, each player can't play any Trainer cards from his or her hand.",
		}
	}],

	attacks: [{
		name: {
			en: "Darkness Grace",
		},
		text: {
			en: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) If you do, put 1 damage counter on Spiritomb. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Will-o'-the-wisp",
		},
		damage: 10
	}],



	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
