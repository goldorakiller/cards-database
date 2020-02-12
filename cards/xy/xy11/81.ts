import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-81",
	localId: 81,

	// Card informations
	name: {
		en: "Xerneas",
		fr: "Xerneas",
	},

	hp: 130,

	type: [
		Type.FAIRY,
	],

	dexId: 716,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/81/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/81/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/81/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/81/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Geomancy",
			fr: "Géo-Contrôle",
		},
		text: {
			en: "Choose 2 of your Benched Pokémon. For each of those Pokémon, search your deck for a Fairy Energy card and attach it to that Pokémon. Shuffle your deck afterward.",
			fr: "Choisissez 2 de vos Pokémon de Banc. Pour chacun de ces Pokémon, cherchez une carte Énergie Fairy dans votre deck et attachez-la au Pokémon choisi. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Rainbow Spear",
			fr: "Javelot Arc-En-Ciel",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
