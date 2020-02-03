import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-45",
	localId: 45,

	// Card informations
	name: {
		en: "Golem",
		fr: "Grolem",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/45/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/45/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/45/high.png",
		},
	},

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Stone Edge",
			fr: "Lame de Roc",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Explosion",
			fr: "Explosion",
		},
		text: {
			en: "This Pokémon does 100 damage to itself.",
			fr: "Ce Pokémon s'inflige 100 dégâts.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card

