import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-118",
	localId: 118,

	// Card informations
	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 561,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/118/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/118/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/118/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/118/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},

	abilities: [{
		id: 148,
		type: AbilityType.TALENT,
		name: {
			en: "Safeguard",
			fr: "Rune Protect",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX.",
			fr: "Évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon par des Pokémon-EX.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "Does 10 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

