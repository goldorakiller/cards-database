import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-24",
	localId: 24,

	// Card informations
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 73,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/24/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/24/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/24/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/24/high.png",
		},
	},

	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Seething Tentacles",
			fr: "Tentacules Grouillants",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
