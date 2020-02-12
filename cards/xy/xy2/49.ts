import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-49",
	localId: 49,

	// Card informations
	name: {
		en: "Barbaracle",
		fr: "Golgopathe",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 689,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/49/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/49/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/49/high.png",
		},
	},

	evolveFrom: {
		en: "Binacle",
		fr: "Opermine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Rock Rush",
			fr: "Déferlante Rocheuse",
		},
		text: {
			en: "Discard as many Fighting Energy cards as you like from your hand. This attack does 30 damage times the number of Energy cards you discarded.",
			fr: "Défaussez autant de cartes Énergie Fighting que vous voulez de votre main. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Boulder Crush",
			fr: "Rocher Écrasant",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
