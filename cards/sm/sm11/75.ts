import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-75",
	localId: 75,

	// Card informations
	name: {
		en: "Alolan Marowak",
		fr: "Ossatueur d’Alola",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 105,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/75/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/75/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/75/high.png",
		},
	},

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		name: {
			en: "Spirit Smash",
			fr: "Fracas d’Esprit",
		},
		text: {
			en: "Discard the top card of your opponent's deck. If the card you discarded is a Pokémon, this attack does damage equal to that Pokémon's HP to your opponent's Active Pokémon.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire. Si la carte défaussée est un Pokémon, cette attaque inflige un nombre de dégâts égal aux PV de ce Pokémon au Pokémon Actif de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Bone Beatdown",
			fr: "Dérouillée d’Os",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
