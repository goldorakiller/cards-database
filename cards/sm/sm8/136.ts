import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-136",
	localId: 136,

	// Card informations
	name: {
		en: "Azumarill",
		fr: "Azumarill",
	},

	hp: 100,

	type: [
		Type.FAIRY,
	],

	dexId: 184,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/136/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/136/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/136/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/136/high.png",
		},
	},

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Polka-Dot Search",
			fr: "Quête à Pois",
		},
		text: {
			en: "Look at the top 8 cards of your deck and attach any number of Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			fr: "Regardez les 8 cartes du dessus de votre deck et attachez le nombre désiré de cartes Énergie que vous y trouvez à vos Pokémon, de la manière que vous voulez. Mélangez les autres cartes avec votre deck.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Play Rough",
			fr: "Câlinerie",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
