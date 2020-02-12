import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-73",
	localId: 73,

	// Card informations
	name: {
		en: "Starmie",
		fr: "Staross",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/73/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/73/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/73/high.png",
		},
	},

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 105,
		name: "HiRON"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Synchro Star",
			fr: "Étoile Synchro",
		},
		text: {
			en: "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached to them, this attack does 60 more damage.",
			fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d'Énergies leur étant attachées, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
