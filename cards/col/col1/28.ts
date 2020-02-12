import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-28",
	localId: 28,

	// Card informations
	name: {
		en: "Mismagius",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 429,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/28/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/28/high.png",
		},
	},

	evolveFrom: {
		en: "Misdreavus",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sleeping Spell",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poltergeist",
		},
		text: {
			en: "Look at your opponent's hand. This attack does 30 damage times the number of Trainer, Supporter, and Stadium cards in your opponent's hand.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
