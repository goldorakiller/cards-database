import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-25",
	localId: 25,

	// Card informations
	name: {
		en: "Alakazam-EX",
		fr: "Alakazam-EX",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 65,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/25/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/25/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/25/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},

	abilities: [{
		id: 412,
		type: AbilityType.TALENT,
		name: {
			en: "Kinesis",
			fr: "Télékinésie",
		},
		text: {
			en: "When you play M Alakazam-EX from your hand to evolve this Pokémon, before it evolves, you may put 2 damage counters on your opponent's Active Pokémon and 3 damage counters on 1 of your opponent's Benched Pokémon.",
			fr: "Lorsque vous jouez M-Alakazam-EX de votre main pour faire évoluer ce Pokémon, avant qu'il n'évolue, vous pouvez placer 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire et 3 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Suppression",
			fr: "Suppression",
		},
		text: {
			en: "Put 3 damage counters on each of your opponent's Pokémon that has any Energy attached to it.",
			fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de votre adversaire auquel de l'Énergie est attachée.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
