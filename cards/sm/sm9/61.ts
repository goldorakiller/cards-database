import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-61",
	localId: 61,

	// Card informations
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 73,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/61/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/61/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/61/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/61/high.png",
		},
	},

	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Void Tentacles",
			fr: "Tentacules du Néant",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Paranormal",
			fr: "Paranormal",
		},
		text: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Ultra Beasts.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques d’Ultra-Chimères.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
