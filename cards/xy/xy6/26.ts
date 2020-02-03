import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-26",
	localId: 26,

	// Card informations
	name: {
		en: "Thundurus-EX",
		fr: "Fulguris-EX",
	},

	hp: 170,

	type: [
		Type.LIGHTNING,
	],

	dexId: 642,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/26/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/26/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/26/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/26/high.png",
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
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Headlock",
			fr: "Prise de Tête",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Voltage Rush",
			fr: "Charge Haute Tension",
		},
		text: {
			en: "This Pokémon does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige 50 dégâts.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card

