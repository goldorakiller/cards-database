import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-84",
	localId: 84,

	// Card informations
	name: {
		en: "Dedenne",
		fr: "Dedenne",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 702,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/84/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/84/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/84/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Nuzzle",
			fr: "Frotte-Frimousse",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Nuzzle Shot",
			fr: "Tir Frotte-Frimousse",
		},
		text: {
			en: "This attack does 10 damage for each of your Pokémon in play that has the Nuzzle attack to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts, pour chacun de vos Pokémon en jeu ayant l’attaque Frotte-Frimousse, à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

