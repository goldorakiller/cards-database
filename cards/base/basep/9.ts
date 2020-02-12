import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "basep-9",
	localId: 9,

	// Card informations
	name: {
		en: "Mew",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 151,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/9/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psywave",
		},
		text: {
			en: "Does 10 damage times the number of Energy cards attached to the Defending Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Devolution Beam",
		},
		text: {
			en: "Choose an Evolved Pokémon (your own or your opponent's). Return the highest Stage Evolution card on that Pokémon to its player's hand. That Pokémon is no longer Asleep, Confused, Paralyzed, Poisoned, or anything else that might be the result of an attack (just as if you had evolved it).",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
