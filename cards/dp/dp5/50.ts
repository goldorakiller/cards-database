import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-50",
	localId: 50,

	// Card informations
	name: {
		en: "Aipom",
		fr: "Capumain",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 190,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/50/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/50/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/50/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collect",
			fr: "Collectionner",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hand Trick",
			fr: "Coup de la main",
		},
		text: {
			en: "Return Aipom and all cards attached to it to your hand. (If you don't have any Benched Pokémon, this attack does nothing.)",
			fr: "Reprenez Capumain dans votre main ainsi que toutes les cartes qui lui sont attachées. (Si vous ne possédez pas de Pokémon de Banc, cette attaque est sans effet.)",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
