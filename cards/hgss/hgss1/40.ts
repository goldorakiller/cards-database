import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-40",
	localId: 40,

	// Card informations
	name: {
		en: "Donphan",
		fr: "Donphan",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 232,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/40/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/40/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/40/high.png",
		},
	},

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Hurl",
			fr: "Lance-pierre",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Spin",
			fr: "Double tour",
		},
		text: {
			en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de faces.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card

