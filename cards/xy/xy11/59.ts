import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-59",
	localId: 59,

	// Card informations
	name: {
		en: "Toxicroak",
		fr: "Coatox",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 454,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/59/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/59/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/59/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/59/high.png",
		},
	},

	evolveFrom: {
		en: "Croagunk",
		fr: "Cradopaud",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 544,
		type: AbilityType.TALENT,
		name: {
			en: "Poison Enzyme",
			fr: "Enzyme Empoisonnée",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Poisoned Pokémon.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Empoisonnés de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
