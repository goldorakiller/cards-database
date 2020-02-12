import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-20",
	localId: 20,

	// Card informations
	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/20/low.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/20/high.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/20/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Inferno Spear",
			fr: "Lance infernale",
		},
		text: {
			en: "Discard a Fire Energy and a Lightning Energy attached to Rayquaza.",
			fr: "Défaussez une Énergie Fire et une Énergie Lightning attachées à Rayquaza.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
