import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-76",
	localId: 76,

	// Card informations
	name: {
		en: "Klang",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 600,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/76/high.png",
		},
	},

	evolveFrom: {
		en: "Klink",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Charge Beam",
		},
		text: {
			en: "Flip a coin. If heads, attach an Energy card from your discard pile to this Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vice Grip",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
