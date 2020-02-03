import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-160",
	localId: 160,

	// Card informations
	name: {
		en: "Naganadel-GX",
		fr: "Mandrillon-GX",
	},

	hp: 210,

	type: [
		Type.DRAGON,
	],

	dexId: 804,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/160/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/160/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/160/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/160/high.png",
		},
	},

	evolveFrom: {
		en: "Poipole",
		fr: "Vémini",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 172,
		name: "PLANETA Tsuji"
	},

	abilities: [{
		id: 1056,
		type: AbilityType.TALENT,
		name: {
			en: "Ultra Conversion",
			fr: "Ultra-Conversion",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard an Ultra Beast card from your hand. If you do, draw 3 cards.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Ultra-Chimère de votre main. Dans ce cas, piochez 3 cartes.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venom Shot",
			fr: "Tir Venin",
		},
		text: {
			en: "Discard 2 Energy from this Pokémon. This attack does 170 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige 170 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Injection-GX",
			fr: "Injection-GX",
		},
		text: {
			en: "Add a card from your opponent's discard pile to their Prize cards face down. (You can't use more than 1 GX attack in a game.)",
			fr: "Ajoutez une carte de la pile de défausse de votre adversaire à ses cartes Récompense, face cachée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

