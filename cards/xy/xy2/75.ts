import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-75",
	localId: 75,

	// Card informations
	name: {
		en: "Pidgey",
		fr: "Roucool",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 16,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/75/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/75/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/75/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Peck Off",
			fr: "Picpic Piqueur",
		},
		text: {
			en: "Before doing damage, discard all Pokémon Tool cards attached to your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez toutes les cartes Outil Pokémon attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
