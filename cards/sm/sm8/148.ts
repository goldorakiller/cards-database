import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-148",
	localId: 148,

	// Card informations
	name: {
		en: "Shiinotic",
		fr: "Lampignon",
	},

	hp: 100,

	type: [
		Type.FAIRY,
	],

	dexId: 756,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/148/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/148/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/148/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/148/high.png",
		},
	},

	evolveFrom: {
		en: "Morelull",
		fr: "Spododo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},

	abilities: [{
		id: 1262,
		type: AbilityType.TALENT,
		name: {
			en: "Effect Spore",
			fr: "Pose Spore",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Asleep.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), le Pokémon Attaquant est maintenant Endormi.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Dream's Touch",
			fr: "Contact Onirique",
		},
		text: {
			en: "If your opponent's Active Pokémon is Asleep, your opponent shuffles all Energy from it into their deck.",
			fr: "Si le Pokémon Actif de votre adversaire est Endormi, votre adversaire mélange toute l’Énergie qui lui est attachée avec son deck.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
