import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-24",
	localId: 24,

	// Card informations
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 219,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/24/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/24/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/24/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/24/high.png",
		},
	},

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 788,
		type: AbilityType.TALENT,
		name: {
			en: "Smooth Over",
			fr: "Aplanir",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a card, shuffle your deck, then put that card on top of it.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte dans votre deck, mélanger votre deck, puis placer cette carte sur le dessus.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
