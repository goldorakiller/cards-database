import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-122",
	localId: 122,

	// Card informations
	name: {
		en: "Crabominable",
		fr: "Crabominable",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 740,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/122/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/122/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/122/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/122/high.png",
		},
	},

	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 61,
		name: "tetsuya koizumi"
	},

	abilities: [{
		id: 75,
		type: AbilityType.TALENT,
		name: {
			en: "Solid Shell",
			fr: "Coquille Dure",
		},
		text: {
			en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Freezing Punch",
			fr: "Poing Gelant",
		},
		text: {
			en: "If this Pokémon has any Water Energy attached to it, this attack does 80 more damage.",
			fr: "Si de l’Énergie Water est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
