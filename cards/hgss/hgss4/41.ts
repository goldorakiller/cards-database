import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-41",
	localId: 41,

	// Card informations
	name: {
		en: "Magby",
		fr: "Magby",
	},

	hp: 30,

	type: [
		Type.FIRE,
	],

	dexId: 240,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/41/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/41/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/41/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/41/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 48,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sweet Sleeping Face",
			fr: "Joli visage endormi",
		},
		text: {
			en: "As long as Magby is Asleep, prevent all damage done to Magby by attacks.",
			fr: "Tant que Magby est Endormi, empêchez tous les dégâts qui lui sont infligés par des attaques.",
		}
	}],

	attacks: [{
		name: {
			en: "Play with Fire",
			fr: "Jouer avec le feu",
		},
		text: {
			en: "The Defending Pokémon is now Burned. Magby is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé. Magby est maintenant Endormi.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
