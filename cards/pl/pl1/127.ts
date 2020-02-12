import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-127",
	localId: 127,

	// Card informations
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/127/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/127/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/127/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/127/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: {
		id: 17,
		name: "Shizurow"
	},

	abilities: [{
		id: 794,
		type: AbilityType.POKEBODY,
		name: {
			en: "Revenge Seed",
			fr: "Graine vengeresse",
		},
		text: {
			en: "If any of your Grass Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, each of Shaymin's attacks does 60 more damage to the Active Pokémon (before applying Weakness and Resistance).",
			fr: "Si les dégâts d'une attaque de votre adversaire a mis K.O 1 de vos Pokémon Grass lors de son tour précédent, chacune des attaques de Shaymin inflige 60 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Flare",
			fr: "Énergie éclatante",
		},
		text: {
			en: "You may move any number of Energy cards attached to your Pokémon to your other Pokémon in any way you like.",
			fr: "Vous pouvez déplacer autant de cartes Énergie attachées à vos Pokémon que vous voulez sur vos autres Pokémon de la façon que vous voulez.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
