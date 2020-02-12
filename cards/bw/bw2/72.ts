import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-72",
	localId: 72,

	// Card informations
	name: {
		en: "Ferrothorn",
		fr: "Noacier",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 598,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/72/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/72/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/72/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/72/high.png",
		},
	},

	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Steel Feelers",
			fr: "Tentacules d'Acier",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gyro Ball",
			fr: "Gyroballe",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc. Ensuite, votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
