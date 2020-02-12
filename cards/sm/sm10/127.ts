import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-127",
	localId: 127,

	// Card informations
	name: {
		en: "Genesect",
		fr: "Genesect",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 649,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/127/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/127/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/127/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/127/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},

	abilities: [{
		id: 481,
		type: AbilityType.TALENT,
		name: {
			en: "Fast-Flight Configuration",
			fr: "Configuration Vol Rapide",
		},
		text: {
			en: "If your opponent has any Pokémon-GX or Pokémon-EX in play, this Pokémon has no Retreat Cost.",
			fr: "Si votre adversaire a au moins un Pokémon-GX ou Pokémon-EX en jeu, ce Pokémon n’a pas de Coût de Retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Splitting Beam",
			fr: "Rayon Divergent",
		},
		text: {
			en: "This attack does 30 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
