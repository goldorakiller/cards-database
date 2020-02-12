import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-94",
	localId: 94,

	// Card informations
	name: {
		en: "Yveltal",
		fr: "Yveltal",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 717,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/94/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/94/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/94/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},

	abilities: [{
		id: 498,
		type: AbilityType.TALENT,
		name: {
			en: "Fright Night",
			fr: "Nuit d'Effroi",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, each Pokémon Tool card in play has no effect.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque carte Outil Pokémon en jeu n'a aucun effet.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pitch-Black Spear",
			fr: "Javelot Noir Absolu",
		},
		text: {
			en: "This attack does 60 damage to 1 of your opponent's Benched Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon-EX de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
