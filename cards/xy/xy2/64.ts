import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-64",
	localId: 64,

	// Card informations
	name: {
		en: "Floette",
		fr: "Floette",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 670,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/64/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/64/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/64/high.png",
		},
	},

	evolveFrom: {
		en: "Flabébé",
		fr: "Flabébé",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 628,
		type: AbilityType.TALENT,
		name: {
			en: "Flower Veil",
			fr: "Flora-Voile",
		},
		text: {
			en: "Each of your Grass Pokémon in play gets +20 HP.",
			fr: "Ajoute 20 PV à chacun de vos Pokémon Grass en jeu.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
