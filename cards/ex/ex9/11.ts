import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-11",
	localId: 11,

	// Card informations
	name: {
		en: "Swampert",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 260,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/11/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/11/high.png",
		},
	},

	evolveFrom: {
		en: "Marshtomp",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 915,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Water Cyclone",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Water Energy attached to 1 of your Active Pokémon to 1 of your Benched Pokémon. This power can't be used if Swampert is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spinning Tail",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Sonic",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
