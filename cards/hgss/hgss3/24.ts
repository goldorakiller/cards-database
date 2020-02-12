import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-24",
	localId: 24,

	// Card informations
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/24/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/24/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/24/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/24/high.png",
		},
	},

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 27,
		type: AbilityType.POKEBODY,
		name: {
			en: "Allergy Flower",
			fr: "Fleur allergène",
		},
		text: {
			en: "Each player can't play any Trainer cards from his or her hand.",
			fr: "Aucun joueur ne peut jouer de carte Dresseur de sa main.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Dazzling Pollen",
			fr: "Pollen étincelant",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage. If tails, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires. Si c'est pile, le Pokémon Défenseur est maintenant Confus.",
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
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
