import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW63",
	localId: "BW63",

	// Card informations
	name: {
		en: "White Kyurem-EX",
		fr: "Kyurem Blanc ex",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW63/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW63/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW63/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW63/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Stream",
			fr: "Flux Draconique",
		},
		text: {
			en: "Flip a coin. If heads, attach a basic Energy card from your discard pile to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Burn",
			fr: "Feu Glacé",
		},
		text: {
			en: "Discard 2 Fire Energy attached to this Pokémon. The Defending Pokémon is now Burned.",
			fr: "Défaussez 2 Énergies Fire attachées à ce Pokémon. Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
