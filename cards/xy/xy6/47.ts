import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-47",
	localId: 47,

	// Card informations
	name: {
		en: "Carbink",
		fr: "Strassie",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 703,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/47/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/47/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/47/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/47/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},

	abilities: [{
		id: 736,
		type: AbilityType.TALENT,
		name: {
			en: "Jewel Armor",
			fr: "Armure Joyau",
		},
		text: {
			en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
			fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spin Tackle",
			fr: "Charge Tournoyante",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon does 20 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
