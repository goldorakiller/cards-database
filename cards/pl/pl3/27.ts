import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-27",
	localId: 27,

	// Card informations
	name: {
		en: "Empoleon FB",
		fr: "Pingoléon ",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/27/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/27/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/27/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/27/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 47,
		name: "Hiroki Fuchino"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Rushing Water",
			fr: "Courant fort",
		},
		text: {
			en: "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
			fr: "Déplacez une carte Énergie attachée au Pokémon Défenseur sur un autre des Pokémon de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Escort",
			fr: "Escorter",
		},
		text: {
			en: "If you played any Supporter card from your hand during this turn, this attack does 40 damage plus 20 more damage.",
			fr: "Si vous jouez une carte Supporter de votre main lors de ce tour, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
