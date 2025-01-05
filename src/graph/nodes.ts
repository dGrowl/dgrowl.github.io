import { COLORS } from './colors'

export interface RawNode {
	id: string
	color: string
	edges?: [string, number][]
}

export const NODE_COLORS: { [key: RawNode['id']]: RawNode['color'] } = {
	'Ana': COLORS.Red,
	'Bea': COLORS.Green,
	'Cal': COLORS.Blue,
	'Dan': COLORS.Yellow,
	'Ana+Cal': COLORS.Purple,
	'Ana+Dan': COLORS.Orange,
	'Bea+Cal': COLORS.Teal,
	'Bea+Dan': COLORS.Lime,
}

export const node = (id: RawNode['id'], edges?: RawNode['edges']): RawNode => ({
	id,
	color: NODE_COLORS[id] || '#000',
	edges,
})
