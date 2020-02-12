import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-16",
	localId: 16,

	// Card informations
	name: {
		en: "Masquerain",
		fr: "Maskadra",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 284,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/16/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/16/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/16/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/16/high.png",
		},
	},

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Surprising Pattern",
			fr: "Motif Surprise",
		},
		text: {
			en: "Discard all Special Energy from each of your opponent's Pokémon.",
			fr: "Défaussez toute l’Énergie spéciale attachée à chacun des Pokémon de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hurricane Wing",
			fr: "Tornad’Aile",
		},
		text: {
			en: "Flip 4 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
