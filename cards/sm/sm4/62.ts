import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-62",
	localId: 62,

	// Card informations
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},

	hp: 160,

	type: [
		Type.DARKNESS,
	],

	dexId: 635,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/62/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/62/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/62/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/62/high.png",
		},
	},

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},

	abilities: [{
		id: 1171,
		type: AbilityType.TALENT,
		name: {
			en: "Weed Out",
			fr: "Filtrage",
		},
		text: {
			en: "Once during your turn (before your attack), you may choose 3 of your Benched Pokémon. Then, discard your other Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez choisir 3 de vos Pokémon de Banc. Ensuite, défaussez vos autres Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Destruction",
			fr: "Destruction Sombre",
		},
		text: {
			en: "You may discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon.",
			fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
