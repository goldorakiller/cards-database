import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-8",
	localId: 8,

	// Card informations
	name: {
		en: "Sunflora",
		fr: "Héliatronc",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 192,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/8/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/8/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/8/high.png",
		},
	},

	evolveFrom: {
		en: "Sunkern",
		fr: "Tournegrin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 58,
		name: "Yumi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Power",
			fr: "Force Soleil",
		},
		text: {
			en: "During your next turn, ignore all Energy in the attack costs of Grass Pokémon and Fire Pokémon. (This includes Pokémon that come into play on that turn.)",
			fr: "Pendant votre prochain tour, ignorez toutes les Énergies dans le coût d’attaque des Pokémon Grass et des Pokémon Fire. (Cela comprend les Pokémon qui sont mis en jeu pendant ce tour.)",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
