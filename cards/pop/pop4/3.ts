import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pop4-3",
	localId: 3,

	// Card informations
	name: {
		en: "Flygon",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 330,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop4/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop4/3/high.png",
		},
	},

	evolveFrom: {
		en: "Vibrava",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 55,
		name: "Hisao Nakamura"
	},

	abilities: [{
		id: 145,
		type: AbilityType.POKEBODY,
		name: {
			en: "Levitate",
		},
		text: {
			en: "As long as Flygon has any Energy attached to it, the Retreat Cost for Flygon is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand Pit",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "POP Series 4",
		code: "pop4"
	}
}

export default card
