import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-32",
	localId: 32,

	// Card informations
	name: {
		en: "Articuno",
		fr: "Artikodin",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 144,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/32/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/32/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/32/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 26,
		name: "Yusuke Ohmura"
	},

	abilities: [{
		id: 1278,
		type: AbilityType.TALENT,
		name: {
			en: "Blizzard Veil",
			fr: "Voile Blizzard",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Benched Water Pokémon.",
			fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur vos Pokémon Water de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Cold Cyclone",
			fr: "Cyclone Froid",
		},
		text: {
			en: "Move 2 Water Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez 2 Énergies Water de ce Pokémon vers l’un de vos Pokémon de Banc.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
