import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV78",
	localId: "SV78",

	// Card informations
	name: {
		en: "Noivern-GX",
		fr: "Bruyverne-GX",
	},

	hp: 200,

	type: [
		Type.DRAGON,
	],

	dexId: 715,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV78/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV78/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV78/high.png",
		},
	},

	evolveFrom: {
		en: "Noibat",
		fr: "Sonistrelle",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Distort",
			fr: "Torsion",
		},
		text: {
			en: "Your opponent can't play any Item cards from their hand during their next turn.",
			fr: "Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
		},
		damage: 50
	},{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Sonic Volume",
			fr: "Volume Sonique",
		},
		text: {
			en: "Your opponent can't play any Special Energy cards from their hand during their next turn.",
			fr: "Votre adversaire ne peut pas jouer de carte Énergie spéciale de sa main pendant son prochain tour.",
		},
		damage: 120
	},{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Boomburst-GX",
			fr: "Bang Sonique-GX",
		},
		text: {
			en: "This attack does 50 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
