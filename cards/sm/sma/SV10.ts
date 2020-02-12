import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV10",
	localId: "SV10",

	// Card informations
	name: {
		en: "Quagsire",
		fr: "Maraiste",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 195,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV10/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV10/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV10/high.png",
		},
	},

	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},

	abilities: [{
		id: 87,
		type: AbilityType.TALENT,
		name: {
			en: "Wash Out",
			fr: "Surlavage",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Water Energy from 1 of your Benched Pokémon to your Active Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Water de l’un de vos Pokémon de Banc vers votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
