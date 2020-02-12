import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-25",
	localId: 25,

	// Card informations
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 555,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/25/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/25/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/25/high.png",
		},
	},

	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Fang",
			fr: "Crocs Feu",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thrash",
			fr: "Mania",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires. Si c’est pile, ce Pokémon s’inflige 20 dégâts.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
