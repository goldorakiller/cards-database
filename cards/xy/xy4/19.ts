import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-19",
	localId: 19,

	// Card informations
	name: {
		en: "Lumineon",
		fr: "Luminéon",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 457,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/19/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/19/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/19/high.png",
		},
	},

	evolveFrom: {
		en: "Finneon",
		fr: "Écayon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Neon Sign",
			fr: "Appel Lumineux",
		},
		text: {
			en: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 2 Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
