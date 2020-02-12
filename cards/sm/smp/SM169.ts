import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM169",
	localId: "SM169",

	// Card informations
	name: {
		fr: "Évoli et Ronflex-GX",
	},

	hp: 270,

	type: [
		Type.COLORLESS,
	],



	image: {
		low: {
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM169/low.png",
		},
		high: {
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM169/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		name: {
			fr: "Règle des ESCOUADES",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Courage !",
		},
		text: {
			fr: "Attachez une carte Énergie de votre main à l’un de vos Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Pression Poids Lourd",
		},
		text: {
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 120 dégâts supplémentaires.",
		},
		damage: "120+"
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Amis Mégatonnes-GX",
		},
		text: {
			fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), piochez jusqu’à avoir 10 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 210
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Promos",
		code: "smp"
	}
}

export default card
