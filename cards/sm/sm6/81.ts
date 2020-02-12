import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-81",
	localId: 81,

	// Card informations
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
	},

	hp: 160,

	type: [
		Type.METAL,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/81/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/81/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/81/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/81/high.png",
		},
	},

	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Total Command",
			fr: "Commande Totale",
		},
		text: {
			en: "This attack does 20 damage for each Benched Pokémon (both yours and your opponent's).",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Whirlpool",
			fr: "Siphon",
		},
		text: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
