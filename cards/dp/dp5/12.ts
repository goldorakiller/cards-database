import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-12",
	localId: 12,

	// Card informations
	name: {
		en: "Phione",
		fr: "Phione",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 489,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/12/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/12/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/12/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Evolution Wish",
			fr: "Souhait évolution",
		},
		text: {
			en: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte qui évolue d'1 de vos Pokémon et placez-la sur ce Pokémon. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
