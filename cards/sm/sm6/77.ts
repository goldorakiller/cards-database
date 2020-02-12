import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-77",
	localId: 77,

	// Card informations
	name: {
		en: "Buzzwole",
		fr: "Mouscoto",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 794,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/77/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/77/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/77/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Sledgehammer",
			fr: "Coup de Masse",
		},
		text: {
			en: "If your opponent has exactly 4 Prize cards remaining, this attack does 90 more damage.",
			fr: "S’il reste exactement 4 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Swing Around",
			fr: "Balançoire",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
