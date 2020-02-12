import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-9",
	localId: 9,

	// Card informations
	name: {
		en: "Solrock",
		fr: "Solaroc",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 338,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/9/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/9/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/9/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 811,
		type: AbilityType.POKEBODY,
		name: {
			en: "Heal Block",
			fr: "Anti-Soin",
		},
		text: {
			en: "If you have Lunatone in play, damage counters can't be removed from any Pokémon (both yours and your opponent's). (Damage counters can still be moved.)",
			fr: "Si vous disposez de Seleroc en jeu, aucun marqueur de dégât ne peut être retiré aux Pokémon (les vôtres et ceux de votre adversaire). (Vous pouvez néanmoins déplacer les marqueurs de dégât.)",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Sun Flash",
			fr: "Éblouissement solaire",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, cette attaque ne fait rien.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
