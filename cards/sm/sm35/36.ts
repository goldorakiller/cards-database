import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-36",
	localId: 36,

	// Card informations
	name: {
		en: "Ekans",
		fr: "Abo",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 23,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/36/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/36/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/36/high.png",
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
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
