import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-21",
	localId: 21,

	// Card informations
	name: {
		en: "Team Aqua's Sharpedo",
		fr: "Sharpedo de la Team Aqua",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 319,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/21/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/21/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/21/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/21/high.png",
		},
	},

	evolveFrom: {
		en: "Team Aqua's Carvanha",
		fr: "Carvanha de la Team Aqua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 691,
		type: AbilityType.TALENT,
		name: {
			en: "Aqua Search",
			fr: "Recherche Aqua",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Team Aqua Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon de la Team Aqua dans votre deck, le montrer et l'ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
