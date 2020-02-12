import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-84",
	localId: 84,

	// Card informations
	name: {
		en: "Crobat",
		fr: "Nostenfer",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 169,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/84/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/84/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/84/high.png",
		},
	},

	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Severe Poison",
			fr: "Poison violent",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 4 marqueurs de dégât au lieu d'un seul sur ce Pokémon entre deux tours.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Skill Dive",
			fr: "Plongeon contrôlé",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
