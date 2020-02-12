import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-99",
	localId: 99,

	// Card informations
	name: {
		en: "Solgaleo",
		fr: "Solgaleo",
	},

	hp: 160,

	type: [
		Type.METAL,
	],

	dexId: 791,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/99/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/99/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/99/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/99/high.png",
		},
	},

	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1176,
		type: AbilityType.TALENT,
		name: {
			en: "Full Metal Body",
			fr: "Métallo-Garde",
		},
		text: {
			en: "If this Pokémon has any Metal Energy attached to it, it has no Weakness.",
			fr: "Si de l’Énergie Metal est attachée à ce Pokémon, il n’a pas de Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Rising Dash",
			fr: "Ruée Ascendante",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
