import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-4",
	localId: 4,

	// Card informations
	name: {
		en: "Electivire FB",
		fr: "Elekable ",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 466,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/4/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/4/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/4/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 60,
		name: "Hironobu Yoshida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dump and Draw",
			fr: "Jeter et piocher",
		},
		text: {
			en: "Discard up to 2 Energy cards from your hand. For each card you discarded, draw 2 cards.",
			fr: "Défaussez jusqu'à 2 cartes Énergie de votre main. Pour chaque carte défaussée, piochez 2 cartes.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electric Current",
			fr: "Courant électrique",
		},
		text: {
			en: "Move a Lightning Energy card attached to Electivire FB to 1 of your Benched Pokémon.",
			fr: "Déplacez une carte Énergie Lightning attachée à Elekable  sur 1 de vos Pokémon de Banc.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
