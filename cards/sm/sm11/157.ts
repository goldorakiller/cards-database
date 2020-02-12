import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-157",
	localId: 157,

	// Card informations
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},

	hp: 120,

	type: [
		Type.DRAGON,
	],

	dexId: 621,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/157/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/157/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/157/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/157/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 138,
		name: "hatachu"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drag Off",
			fr: "Traîne",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 30 damage to the new Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Tail",
			fr: "Draco-Queue",
		},
		text: {
			en: "Flip 2 coins. This attack does 100 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
