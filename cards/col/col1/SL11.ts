import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-SL11",
	localId: "SL11",

	// Card informations
	name: {
		en: "Suicune",
		fr: "Suicune",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 245,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/SL11/low.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL11/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/SL11/high.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/SL11/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},

	abilities: [{
		id: 188,
		type: AbilityType.POKEBODY,
		name: {
			en: "Extreme Speed",
			fr: "Vitesse extrême",
		},
		text: {
			en: "Suicune's Retreat Cost is Colorless less for each Water Energy attached to Suicune.",
			fr: "Le Coût de retraite de Suicune est Colorless de moins pour chaque Énergie Water attachée à Suicune.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Tsunami",
			fr: "Tsunami",
		},
		text: {
			en: "This attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à chaque Pokémon de votre adversaire (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
