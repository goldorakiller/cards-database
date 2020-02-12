import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-126",
	localId: 126,

	// Card informations
	name: {
		en: "Audino",
		fr: "Nanméouïe",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 531,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/126/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/126/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/126/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/126/high.png",
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

	abilities: [{
		id: 432,
		type: AbilityType.TALENT,
		name: {
			en: "Busybody",
			fr: "Sans-Gêne",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is in your hand, you may reveal it. If you do, heal 10 damage and remove a Special Condition from your Active Pokémon. Then, discard this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est dans votre main, vous pouvez le montrer. Dans ce cas, soignez 10 dégâts et retirez un État Spécial de votre Pokémon Actif. Ensuite, défaussez ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hip Bump",
			fr: "Hanche Amortissante",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
