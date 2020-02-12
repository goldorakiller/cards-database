import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-66",
	localId: 66,

	// Card informations
	name: {
		en: "Yveltal BREAK",
		fr: "Yveltal TURBO",
	},

	hp: 150,

	type: [
		Type.DARKNESS,
	],

	dexId: 717,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/66/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/66/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/66/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/66/high.png",
		},
	},

	evolveFrom: {
		en: "Yveltal",
		fr: "Yveltal",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			en: "Baleful Night",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "This attack does 30 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 120
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.DARKNESS
		],
		name: {
			fr: "Nuit Maléfique",
		},
		text: {
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 120
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
