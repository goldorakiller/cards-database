import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-34",
	localId: 34,

	// Card informations
	name: {
		en: "Cloyster",
		fr: "Crustabri",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 91,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/34/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/34/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/34/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/34/high.png",
		},
	},

	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Headlock",
			fr: "Prise de Tête",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

