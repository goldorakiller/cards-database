import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-8",
	localId: 8,

	// Card informations
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 492,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/8/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/8/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/8/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},

	abilities: [{
		id: 85,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Celebration Wind",
			fr: "Vent de fête",
		},
		text: {
			en: "Once during your turn, when you put Shaymin from your hand onto your Bench, you may move as many Energy cards attached to your Pokémon as you like to any of your other Pokémon.",
			fr: "Une seule fois pendant votre tour, lorsque vous placez Shaymin de votre main sur votre Banc, vous pouvez prendre une ou plusieurs cartes Énergie attachées à l'un de vos Pokémon et les attacher à un autre Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Bloom",
			fr: "Énergie florissante",
		},
		text: {
			en: "Remove 3 damage counters from each of your Pokémon that has any Energy attached to it.",
			fr: "Retirez 3 marqueurs de dégât à chacun de vos Pokémon ayant une ou plusieurs cartes Énergie.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

