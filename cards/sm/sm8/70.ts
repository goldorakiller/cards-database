import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-70",
	localId: 70,

	// Card informations
	name: {
		en: "Bruxish",
		fr: "Denticrisse",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 779,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/70/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/70/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/70/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 61,
		name: "tetsuya koizumi"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Mind Bend",
			fr: "Contrôleur d’Esprit",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Follow the Wound",
			fr: "Bonjour les Dégâts",
		},
		text: {
			en: "This attack does 60 damage to 1 of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
