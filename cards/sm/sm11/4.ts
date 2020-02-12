import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-4",
	localId: 4,

	// Card informations
	name: {
		en: "Celebi",
		fr: "Celebi",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/4/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/4/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/4/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Time Spiral",
			fr: "Spirale Temporelle",
		},
		text: {
			en: "Devolve 1 of your opponent's evolved Pokémon by removing the highest Stage Evolution card from it. Your opponent shuffles that card into their deck.",
			fr: "Faites dés-évoluer l’un des Pokémon évolués de votre adversaire en ôtant la carte Évolution de plus haut Niveau. Votre adversaire mélange cette carte avec son deck.",
		},
	},{
		cost: [
			Type.GRASS
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
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
