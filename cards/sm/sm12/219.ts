import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-219",
	localId: 219,

	// Card informations
	name: {
		en: "Alolan Persian-GX",
		fr: "Persian d’Alola-GX",
	},

	hp: 200,

	type: [
		Type.DARKNESS,
	],

	dexId: 53,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/219/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/219/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/219/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/219/high.png",
		},
	},

	evolveFrom: {
		en: "Alolan Meowth",
		fr: "Miaouss d’Alola",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 172,
		name: "PLANETA Tsuji"
	},

	abilities: [{
		id: 1380,
		type: AbilityType.TALENT,
		name: {
			en: "Smug Face",
			fr: "Gros Malin",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's TAG TEAM Pokémon and Ultra Beasts, and by your opponent's Pokémon that have any Special Energy attached to them.",
			fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon ESCOUADE et Ultra-Chimères de votre adversaire, et par les Pokémon de votre adversaire auxquels de l’Énergie spéciale est attachée.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Slash",
			fr: "Tranch’Griffe",
		},
		damage: 120
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stalking Claws-GX",
			fr: "Griffes Traquantes-GX",
		},
		text: {
			en: "This attack does 120 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness, Resistance, or any other effects on that Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 120 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur ce Pokémon-là. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
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

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
