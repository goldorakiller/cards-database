import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-50",
	localId: 50,

	// Card informations
	name: {
		en: "Huntail",
		fr: "Serpang",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 367,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/50/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/50/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/50/high.png",
		},
	},

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
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
			Type.WATER
		],
		name: {
			en: "Powerful Storm",
			fr: "Tempête Puissante",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous vos Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crunch",
			fr: "Mâchouille",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
