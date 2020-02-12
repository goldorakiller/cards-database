import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-20",
	localId: 20,

	// Card informations
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 80,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/20/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/20/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/20/high.png",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Careless Head",
			fr: "Tête Imprudente",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Walk-Off Homer",
			fr: "But Vainqueur",
		},
		text: {
			en: "If you use this attack when you have only 1 Prize card left, you win this game.",
			fr: "Si vous utilisez cette attaque alors qu'il ne vous reste qu'une seule carte Récompense, vous gagnez cette partie.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
