import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-42",
	localId: 42,

	// Card informations
	name: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 608,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/42/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/42/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/42/high.png",
		},
	},

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Cursed Drop",
			fr: "Chute Maudite",
		},
		text: {
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Night March",
			fr: "Marche Nocturne",
		},
		text: {
			en: "This attack does 20 damage times the number of Pokémon in your discard pile that have the Night March attack.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon dans votre pile de défausse possédant l'attaque Marche Nocturne.",
		},
		damage: 20
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
