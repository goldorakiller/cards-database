import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-96",
	localId: 96,

	// Card informations
	name: {
		en: "Arceus ◇",
		fr: "Arceus ",
	},

	hp: 160,

	type: [
		Type.COLORLESS,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/96/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/96/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/96/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/96/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 1147,
		type: AbilityType.TALENT,
		name: {
			en: "First Law",
			fr: "Loi Originelle",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon.",
			fr: "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Trinity Star",
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
		text: {
			en: "You can use this attack only if you have Grass, Water, and Lightning Pokémon on your Bench. Search your deck for up to 3 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			fr: "Étoile Triptyque",
		},
		text: {
			fr: "Vous ne pouvez utiliser cette attaque que si vous avez des Pokémon Grass, Water et Lightning sur votre Banc. Cherchez jusqu’à 3 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
