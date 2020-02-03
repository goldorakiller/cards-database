import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-26",
	localId: 26,

	// Card informations
	name: {
		en: "Victini",
		fr: "Victini",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 494,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/26/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/26/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/26/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/26/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Victory Sign",
			fr: "V de Victoire",
		},
		text: {
			en: "Search your deck for up to 2 basic Energy cards of different types and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 2 cartes Énergie de base de différents types et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flare",
			fr: "Flamboiement",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
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

