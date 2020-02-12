import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-16",
	localId: 16,

	// Card informations
	name: {
		en: "Blastoise",
		fr: "Tortank",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 9,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/16/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/16/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/16/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/16/high.png",
		},
	},

	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},

	abilities: [{
		id: 574,
		type: AbilityType.TALENT,
		name: {
			en: "Deluge",
			fr: "Deluge",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may attach a Water Energy card from your hand to 1 of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Water de votre main à 1 de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "Does 10 more damage for each Water Energy attached to this Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
