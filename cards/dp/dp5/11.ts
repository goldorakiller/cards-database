import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-11",
	localId: 11,

	// Card informations
	name: {
		en: "Palkia",
		fr: "Palkia",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 484,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/11/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/11/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/11/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/11/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
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
			en: "Zone Shift",
			fr: "Orbe Perlé",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Si un Pokémon Actif possède une Faiblesse au type Water, les attaques de Palkia infligent 20 dégâts supplémentaires à ce Pokémon (avant application de la Faiblesse et de la Résistance).",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pearl Blast",
			fr: "Changement de zone",
		},
		text: {
			en: "You may return an Energy card attached to Palkia to your hand. If you do, choose an Energy card attached to the Defending Pokémon and return it to your opponent's hand.",
			fr: "Votre adversaire échange le Défenseur Pokémon avec 1 de ses Pokémon de Banc.",
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
			fr: "Explosion perle",
		},
		text: {
			fr: "Vous pouvez reprendre dans votre main une carte Énergie attachée à Palkia. Choisissez alors une carte Énergie attachée au Pokémon Défenseur et demandez à votre adversaire de la reprendre dans sa main.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
