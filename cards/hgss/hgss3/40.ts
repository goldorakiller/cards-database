import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-40",
	localId: 40,

	// Card informations
	name: {
		en: "Unown",
		fr: "Zarbi",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/40/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/40/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/40/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/40/high.png",
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
		id: 47,
		type: AbilityType.POKEPOWER,
		name: {
			en: "DARK",
			fr: "TÉNÈBRES",
		},
		text: {
			en: "Once during your turn,when you put Unown from your hand onto your Bench, you may search your deck for a Darkness Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Une seule fois pendant votre tour, lorsque vous prenez Zarbi dans votre main et le placez sur votre Banc, vous pouvez chercher une carte Énergie Darkness dans votre deck, la montrer à votre adversaire et la placer dans votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
