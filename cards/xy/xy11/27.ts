import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-27",
	localId: 27,

	// Card informations
	name: {
		en: "Mantine",
		fr: "Démanta",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 226,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/27/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/27/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/27/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/27/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 101,
		name: "DemizuPosuka"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Healing Wave",
			fr: "Vague de Soin",
		},
		text: {
			en: "Discard as many cards as you like from your hand. Heal 10 damage from this Pokémon for each card you discarded in this way.",
			fr: "Défaussez autant de cartes que vous voulez de votre main. Soignez 10 dégâts à ce Pokémon pour chaque carte défaussée de cette façon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Dwindling Wave",
			fr: "Vague Faiblissante",
		},
		text: {
			en: "This attack does 90 damage minus 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 90 dégâts moins 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
