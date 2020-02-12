import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-10",
	localId: 10,

	// Card informations
	name: {
		en: "Vespiquen",
		fr: "Apireine",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 416,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/10/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/10/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/10/high.png",
		},
	},

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
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
			Type.COLORLESS
		],
		name: {
			en: "Intelligence Gathering",
			fr: "Collecte de Renseignements",
		},
		text: {
			en: "You may draw cards until you have 6 cards in your hand.",
			fr: "Vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bee Revenge",
			fr: "Abeille Vindicative",
		},
		text: {
			en: "This attack does 10 more damage for each Pokémon in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
