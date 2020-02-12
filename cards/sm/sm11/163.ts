import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-163",
	localId: 163,

	// Card informations
	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 115,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/163/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/163/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/163/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/163/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Double Draw",
			fr: "Double Pioche",
		},
		text: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tag Impact",
			fr: "Impact d’Escouade",
		},
		text: {
			en: "This attack does 50 damage for each of your TAG TEAM Pokémon in play.",
			fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon ESCOUADE en jeu.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
