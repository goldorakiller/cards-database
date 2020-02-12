import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-106",
	localId: 106,

	// Card informations
	name: {
		en: "Stakataka",
		fr: "Ama-Ama",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 805,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/106/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/106/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/106/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/106/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},

	abilities: [{
		id: 139,
		type: AbilityType.TALENT,
		name: {
			en: "Wall of Stone",
			fr: "Mur de Pierres",
		},
		text: {
			en: "If your opponent has 3 or fewer Prize cards remaining, this Pokémon's maximum HP is 200.",
			fr: "S’il reste 3 cartes Récompense ou moins à votre adversaire, les PV maximum de ce Pokémon sont de 200.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Top Down",
			fr: "Écras’Montagne",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
