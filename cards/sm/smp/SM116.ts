import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM116",
	localId: "SM116",

	// Card informations
	name: {
		en: "Xurkitree",
		fr: "Câblifère",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 796,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM116/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM116/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM116/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM116/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Dazzle Blast",
			fr: "Explosion de Lumière",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Cablegram",
			fr: "Câblogramme",
		},
		text: {
			en: "If you have exactly 3 Prize cards remaining, your opponent's Active Pokémon is now Paralyzed.",
			fr: "S’il vous reste exactement 3 cartes Récompense, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 100
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
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
