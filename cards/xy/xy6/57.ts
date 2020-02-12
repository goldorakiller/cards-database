import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-57",
	localId: 57,

	// Card informations
	name: {
		en: "Salamence",
		fr: "Drattak",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 373,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/57/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/57/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/57/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/57/high.png",
		},
	},

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Shatter",
			fr: "Fracas",
		},
		text: {
			en: "Discard any Stadium card in play.",
			fr: "Défaussez toute carte Stade en jeu.",
		},
		damage: 60
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Howl",
			fr: "Hurlement Puissant",
		},
		text: {
			en: "This attack does 20 damage times the number of cards in your opponent's hand.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de cartes dans la main de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Steam Blast",
			fr: "Geyser de Vapeur",
		},
		text: {
			en: "Discard 3 Energy attached to this Pokémon.",
			fr: "Défaussez 3 Énergies attachées à ce Pokémon.",
		},
		damage: 170
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
