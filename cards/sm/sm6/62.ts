import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-62",
	localId: 62,

	// Card informations
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/62/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/62/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/62/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/62/high.png",
		},
	},

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Dive",
			fr: "Plongeon Rapide",
		},
		text: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Royal Blades",
			fr: "Lames Royales",
		},
		text: {
			en: "If you played Cynthia from your hand during this turn, this attack does 100 more damage.",
			fr: "Si vous avez joué Cynthia de votre main pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
