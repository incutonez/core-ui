export type IfEquals<X, Y, A = X, B = never> =
	(<T>() => T extends X ? 1 : 2) extends
	(<T>() => T extends Y ? 1 : 2) ? A : B;

export type WritableKeys<T> = {
	[P in keyof T]-?:
	IfEquals<
		{ [Q in P]: T[P] },
		{ -readonly [Q in P]: T[P] },
		P
	>
}[keyof T];

export type ModelInterface<T> = {
	// We need to map over the keys directly to preserve optionality. We filter with "as"
	// Exclude undefined from the check to properly handle optional properties
	// eslint-disable-next-line @typescript-eslint/ban-types
	[K in keyof T as T[K] extends Function ? never : K extends symbol ? never : K]: Exclude<T[K], undefined> extends Array<infer E> ? Array<ModelInterface<E>> : Exclude<T[K], undefined> extends Record<string, never> ? ModelInterface<T[K]> : T[K];
};

/**
 * This removes all setters, getters, and read only properties, on top of the excluded functions and symbols from
 * ModelInterface.
 * Source:
 * - https://stackoverflow.com/questions/49579094/typescript-conditional-types-filter-out-readonly-properties-pick-only-requir
 * - https://github.com/microsoft/TypeScript/issues/42896#issuecomment-782754005
 */
export type IViewModel<T> = Pick<T, WritableKeys<ModelInterface<T>>>;
