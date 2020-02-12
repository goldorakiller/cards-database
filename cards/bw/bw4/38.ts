import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-38",
	localId: 38,

	// Card informations
	name: {
		en: "Kyurem-EX",
		fr: "Kyurem-EX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/38/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/38/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/38/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/38/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frozen Wings",
			fr: "Ailes Gelées",
		},
		text: {
			en: "Discard a Special Energy attached to the Defending Pokémon.",
			fr: "Défaussez une Énergie spéciale attachée au Pokémon Défenseur.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hail Blizzard",
			fr: "Tempêtegrêle",
		},
		text: {
			en: "This Pokémon can't use Hail Blizzard during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Tempêtegrêle pendant votre prochain tour.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
