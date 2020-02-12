import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-35",
	localId: 35,

	// Card informations
	name: {
		en: "Emolga",
		fr: "Emolga",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 587,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/35/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/35/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/35/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Catch",
			fr: "Attrape-Énergie",
		},
		text: {
			en: "Put 3 basic Energy cards from your discard pile into your hand.",
			fr: "Ajoutez 3 cartes Énergie de base de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Volt Switch",
			fr: "Change Éclair",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Lightning Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon Lightning de Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
