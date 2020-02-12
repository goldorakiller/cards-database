import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-65",
	localId: 65,

	// Card informations
	name: {
		en: "Trubbish",
		fr: "Miamiasme",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 568,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/65/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/65/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/65/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Tool Drop",
			fr: "Chute d’Outils",
		},
		text: {
			en: "Does 20 damage for each Pokémon Tool card attached to Pokémon in play (both yours and your opponent's).",
			fr: "Inflige 20 dégâts pour chaque carte Outil Pokémon attachée aux Pokémon en jeu (les vôtres et ceux de votre adversaire).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
