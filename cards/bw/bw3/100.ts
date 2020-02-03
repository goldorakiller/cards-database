import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-100",
	localId: 100,

	// Card informations
	name: {
		en: "Cobalion",
		fr: "Cobaltium",
	},

	hp: 120,

	type: [
		Type.METAL,
	],

	dexId: 638,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/100/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/100/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/100/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Energy Press",
			fr: "Pression Énergétique",
		},
		text: {
			en: "Does 20 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Iron Breaker",
			fr: "Brise-Fer",
		},
		text: {
			en: "The Defending Pokémon can't attack during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas attaquer pendant le prochain tour de votre adversaire.",
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

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card

