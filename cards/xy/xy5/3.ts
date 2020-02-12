import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-3",
	localId: 3,

	// Card informations
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/3/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/3/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/3/high.png",
		},
	},

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Allergic Shock",
			fr: "Choc Allergique",
		},
		text: {
			en: "During your next turn, if the Defending Pokémon is damaged by an attack, it is Knocked Out.",
			fr: "Pendant votre prochain tour, si le Pokémon Défenseur subit les dégâts d'une attaque, il est mis K.O.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Twineedle",
			fr: "Double-Dard",
		},
		text: {
			en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
