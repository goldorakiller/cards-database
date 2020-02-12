import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-62",
	localId: 62,

	// Card informations
	name: {
		en: "Solrock",
		fr: "Solaroc",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 338,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/62/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/62/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/62/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/62/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},

	abilities: [{
		id: 837,
		type: AbilityType.TALENT,
		name: {
			en: "Sunbeam",
			fr: "Rayon de Soleil",
		},
		text: {
			en: "The maximum HP of each of your Lunatone in play is 130.",
			fr: "Les PV maximum de chacun de vos Séléroc en jeu sont de 130.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scorching Light",
			fr: "Lumière Aveuglante",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed. If tails, your opponent's Active Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
