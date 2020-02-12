import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-80",
	localId: 80,

	// Card informations
	name: {
		en: "Mawile",
		fr: "Mysdibule",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 303,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/80/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/80/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/80/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/80/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Astonish",
			fr: "Étonnement",
		},
		text: {
			en: "Flip a coin. If heads, choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
			fr: "Lancez une pièce. Si c'est face, choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Big Ol' Bite",
			fr: "Morsure Sans Merci",
		},
		text: {
			en: "Heal 30 damage from this Pokémon. The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Soignez 30 dégâts à ce Pokémon. Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
