import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-46",
	localId: 46,

	// Card informations
	name: {
		en: "Honedge",
		fr: "Monorpale",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 679,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/46/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/46/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/46/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/46/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 1207,
		type: AbilityType.TALENT,
		name: {
			en: "Final Hour",
			fr: "Dernière Heure",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, put 3 damage counters on 1 of your opponent's Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque de votre adversaire, placez 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

