import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-1",
	localId: 1,

	// Card informations
	name: {
		en: "Venusaur-EX",
		fr: "Florizarre-EX",
	},

	hp: 180,

	type: [
		Type.GRASS,
	],

	dexId: 3,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/1/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/1/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/1/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/1/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Powder",
			fr: "Poudre Toxik",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 60
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jungle Hammer",
			fr: "Marteau Végétal",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
