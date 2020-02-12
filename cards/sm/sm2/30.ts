import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-30",
	localId: 30,

	// Card informations
	name: {
		en: "Wailord",
		fr: "Wailord",
	},

	hp: 200,

	type: [
		Type.WATER,
	],

	dexId: 321,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/30/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/30/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/30/high.png",
		},
	},

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 35,
		name: "OOYAMA"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Dive",
			fr: "Plongée",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Open Sea",
			fr: "Grande Bleue",
		},
		text: {
			en: "Heal 30 damage from each of your Water Pokémon.",
			fr: "Soignez 30 dégâts à chacun de vos Pokémon Water.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
