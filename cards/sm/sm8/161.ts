import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-161",
	localId: 161,

	// Card informations
	name: {
		en: "Kecleon",
		fr: "Kecleon",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 352,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/161/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/161/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/161/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/161/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 35,
		name: "OOYAMA"
	},

	abilities: [{
		id: 1267,
		type: AbilityType.TALENT,
		name: {
			en: "Unit Color 1",
			fr: "Couleur Unitaire 1",
		},
		text: {
			en: "As long as this Pokémon has Unit Energy GrassFireWater attached to it, it is a Grass, Fire, and Water Pokémon.",
			fr: "Tant que de l’Énergie Unitaire GrassFireWater est attachée à ce Pokémon, c’est un Pokémon Grass, Fire et Water.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tongue Smack",
			fr: "Frappe Langue",
		},
		text: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
