import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-15",
	localId: 15,

	// Card informations
	name: {
		en: "Arcanine G",
		fr: "Arcanin ",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/15/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/15/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/15/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 123,
		name: "Yusuke Ishikawa"
	},

	abilities: [{
		id: 188,
		type: AbilityType.POKEBODY,
		name: {
			en: "Extreme Speed",
			fr: "Vitesse extrême",
		},
		text: {
			en: "Arcanine G's Retreat Cost is Colorless less for each Fire Energy attached to Arcanine G.",
			fr: "Le Coût de retraite d'Arcanin  est Colorless de moins pour chaque Énergie Fire attachée à Arcanin .",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Overrun",
			fr: "Dépassement",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
