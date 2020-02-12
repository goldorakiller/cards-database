import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-123",
	localId: 123,

	// Card informations
	name: {
		en: "Meloetta",
		fr: "Meloetta",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 648,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/123/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/123/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/123/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/123/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tag Cheer",
			fr: "Éloges d’Escouade",
		},
		text: {
			en: "Attach an Energy card from your hand to 1 of your TAG TEAM Pokémon.",
			fr: "Attachez une carte Énergie de votre main à l’un de vos Pokémon ESCOUADE.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shooting Star Pirouette",
			fr: "Pirouette Comète",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
