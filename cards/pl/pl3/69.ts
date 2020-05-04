import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-69",
	localId: 69,

	// Card informations
	name: {
		en: "Metang",
		fr: "Metang",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 375,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/69/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/69/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/69/high",
		},
	},

	evolveFrom: {
		en: "Beldum",
		fr: "Terhal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",

	abilities: [{
		id: 21,
		type: AbilityType.POKEBODY,
		name: {
			en: "Metallic Lift",
			fr: "Élévation métallique",
		},
		text: {
			en: "If Metang has any Metal Energy attached to it, the Retreat Cost for Metang is 0.",
			fr: "Si Metang possède de l'Énergie Metal, son Coût de retraite est de 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
