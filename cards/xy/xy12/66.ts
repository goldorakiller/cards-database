import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-66",
	localId: 66,

	// Card informations
	name: {
		en: "Rattata",
		fr: "Rattata",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 19,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/66/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/66/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/66/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/66/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 1092,
		type: AbilityType.TALENT,
		name: {
			en: "Mischievous Fang",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench, you may discard all Pokémon Tool cards attached to your opponent's Active Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Talent : Croc Facétieux",
		},
		text: {
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez défausser toutes les cartes Outil Pokémon attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Morsure",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
