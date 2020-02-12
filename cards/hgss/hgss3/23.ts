import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-23",
	localId: 23,

	// Card informations
	name: {
		en: "Vespiquen",
		fr: "Apireine",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 416,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/23/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/23/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/23/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/23/high.png",
		},
	},

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},

	abilities: [{
		id: 861,
		type: AbilityType.POKEBODY,
		name: {
			en: "Defense Sign",
			fr: "Signal de défense",
		},
		text: {
			en: "Prevent all damage done to your Benched Grass Pokémon by attacks.",
			fr: "Prévenez tous les dégâts infligés par des attaques aux Pokémon Grass de votre Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mach Wind",
			fr: "Vent frénétique",
		},
		text: {
			en: "During your next turn, Vespiquen's Retreat Cost is 0.",
			fr: "Pendant votre prochain tour, le Coût de retraite d'Apireine est de 0.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
