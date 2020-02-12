import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-60",
	localId: 60,

	// Card informations
	name: {
		en: "Zeraora",
		fr: "Zeraora",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 807,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/60/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/60/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/60/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/60/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Crushing Claw",
			fr: "Griffe Écrasante",
		},
		text: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Discharge",
			fr: "Coup d’Jus",
		},
		text: {
			en: "Discard all Lightning Energy from this Pokémon. This attack does 50 damage for each card you discarded in this way.",
			fr: "Défaussez toute l’Énergie Lightning de ce Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 50
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
