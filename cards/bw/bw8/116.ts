import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-116",
	localId: 116,

	// Card informations
	name: {
		en: "Braviary",
		fr: "Gueriaigle",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 628,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/116/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/116/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/116/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/116/high.png",
		},
	},

	evolveFrom: {
		en: "Rufflet",
		fr: "Furaiglon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},

	abilities: [{
		id: 179,
		type: AbilityType.TALENT,
		name: {
			en: "Big Wing",
			fr: "Grande Aile",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec 1 de ses Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Edge",
			fr: "Tranchant Sauvage",
		},
		text: {
			en: "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
			fr: "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
		},
		damage: 60
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
