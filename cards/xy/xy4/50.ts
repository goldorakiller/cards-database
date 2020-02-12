import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-50",
	localId: 50,

	// Card informations
	name: {
		en: "Gigalith",
		fr: "Gigalithe",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 526,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/50/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/50/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/50/high.png",
		},
	},

	evolveFrom: {
		en: "Boldore",
		fr: "Géolithe",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},

	abilities: [{
		id: 1406,
		type: AbilityType.TALENT,
		name: {
			en: "High Density Armor",
			fr: "Armure Résistante",
		},
		text: {
			en: "If this Pokémon has full HP, any damage done to this Pokémon by an opponent's attack is reduced by 50 (after applying Weakness and Resistance).",
			fr: "Si ce Pokémon a tous ses PV, tous les dégâts infligés à ce Pokémon par une attaque de votre adversaire sont réduits de 50 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Overdrive Smash",
			fr: "Boost Atomisant",
		},
		text: {
			en: "During your next turn, this Pokémon's Overdrive Smash attack does 40 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Boost Atomisant de ce Pokémon inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
