import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-36",
	localId: 36,

	// Card informations
	name: {
		en: "Raichu",
		fr: "Raichu",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/36/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/36/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/36/high.png",
		},
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Energize",
			fr: "Énergisant",
		},
		text: {
			en: "Attach a Lightning Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Spark Bolt",
			fr: "Éclair Étincelant",
		},
		text: {
			en: "You may discard all Energy attached to this Pokémon. If you do, this attack does 70 more damage.",
			fr: "Vous pouvez défausser toutes les Énergies attachées à ce Pokémon. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
