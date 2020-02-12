import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-59",
	localId: 59,

	// Card informations
	name: {
		en: "Aggron",
		fr: "Galeking",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 306,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/59/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/59/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/59/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/59/high.png",
		},
	},

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Knock Back",
			fr: "Dégagement",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 50
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aura of the Land",
			fr: "Aura de la Terre",
		},
		text: {
			en: "Does 20 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à chaque Pokémon de Banc (les vôtres et ceux de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
