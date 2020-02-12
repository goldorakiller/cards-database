import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-15",
	localId: 15,

	// Card informations
	name: {
		en: "Arcanine",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/15/high.png",
		},
	},

	evolveFrom: {
		en: "Growlithe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 283,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fire Veil",
		},
		text: {
			en: "If Arcanine is your Active Pokémon and is damaged by an opponent's attack (even if Arcanine is Knocked Out), the Attacking Pokémon is now Burned.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Burn Up",
		},
		text: {
			en: "Flip a coin. If tails, discard all Fire Energy cards attached to Arcanine.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
