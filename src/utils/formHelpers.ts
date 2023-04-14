import { twMerge } from 'tailwind-merge'

//TODO remove the dynamic classes, they don't work
/**
 * FilterSelect
 *
 * Meant for form components only, as a way to style them in one place
 * @packageDocumentation
 * @module FilterSelect
 *
 * @remarks
 * ...
 *
 * @example
 * ```jsx
 * <FilterSelect> ... </FilterSelect>
 * ```
 */
export const formStyles = ({ tag, classes, hasError }: { tag: string; classes?: string; hasError?: boolean }) => {
  return twMerge(
    `inline-block relative [&_${tag}]:px-6 [&_${tag}]:py-3 [&_${tag}]:border [&_${tag}]:border-gray-300 [&_${tag}]:rounded-full [&_${tag}]:focus-within:ring-2 [&_${tag}]:focus-within:ring-black [&_${tag}]:focus-within:ring-offset-2 [&_${tag}]:focus-within:ring-offset-white [&_${tag}]:focus-within:border-transparent`,
    classes
  )
}
formStyles.defaultProps = { hasError: false }
