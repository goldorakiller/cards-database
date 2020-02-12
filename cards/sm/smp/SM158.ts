import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM158",
	localId: "SM158",

	// Card informations
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},

	hp: 150,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM158/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM158/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM158/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM158/high.png",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},

	abilities: [{
		id: 1260,
		type: AbilityType.TALENT,
		name: {
			en: "Roaring Resolve",
			fr: "Détermination Rugissante",
		},
		text: {
			en: "Once during your turn (before your attack), you may put 2 damage counters on this Pokémon. If you do, search your deck for up to 2 Fire Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 2 marqueurs de dégâts sur ce Pokémon. Dans ce cas, cherchez jusqu’à 2 cartes Énergie Fire dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Continuous Blaze Ball",
			fr: "Balle Incendiaire Continue",
		},
		text: {
			en: "Discard all Fire Energy from this Pokémon. This attack does 50 more damage for each card you discarded in this way.",
			fr: "Défaussez toute l’Énergie Fire de ce Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
