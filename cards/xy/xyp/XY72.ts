import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY72",
	localId: "XY72",

	// Card informations
	name: {
		en: "Latios-EX",
		fr: "Latios-EX",
	},

	hp: 170,

	type: [
		Type.DRAGON,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY72/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY72/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY72/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY72/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Fast Raid",
			fr: "Raid Éclair",
		},
		text: {
			en: "If you go first, you can use this attack on your first turn.",
			fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Light Pulse",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon during your opponent's next turn.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
