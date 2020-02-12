import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-53",
	localId: 53,

	// Card informations
	name: {
		en: "Starmie",
		fr: "Staross",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/53/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/53/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/53/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/53/high.png",
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
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Cosmic Cyclone",
			fr: "Cyclone cosmique",
		},
		text: {
			en: "Choose as many Water Energy attached to your Pokémon as you like. This attack does 20 damage times the amount of Energy you chose. Shuffle those cards back into your deck.",
			fr: "Choisissez autant de cartes Énergie Water attachées à votre Pokémon que vous le souhaitez. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes Énergie que vous avez choisies. Mélangez ces cartes dans votre deck.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
