import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-85",
	localId: 85,

	// Card informations
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 477,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/85/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/85/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/85/high.png",
		},
	},

	evolveFrom: {
		en: "Dusclops",
		fr: "Téraclope",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},

	abilities: [{
		id: 1375,
		type: AbilityType.TALENT,
		name: {
			en: "Grim Marking",
			fr: "Symbole Sinistre",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, put 4 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque d’un adversaire, placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psych Up",
			fr: "Boost",
		},
		text: {
			en: "During your next turn, this Pokémon's Psych Up attack does 60 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l’attaque Boost de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
