import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-76",
	localId: 76,

	// Card informations
	name: {
		en: "Electabuzz",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 125,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/76/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 33,
		name: "Hiroaki Ito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Draw",
		},
		text: {
			en: "Search your deck for a basic Energy card and attach it to Electabuzz. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Reflect Energy",
		},
		text: {
			en: "If you have any Benched Pokémon and if there are any basic Energy cards attached to Electabuzz, take 1 of those Energy cards and attach it to 1 of those Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
