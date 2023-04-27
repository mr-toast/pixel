import { forwardRef } from 'react'
import { useField, useVisuallyHidden } from 'react-aria'
import { useControllableValue } from 'ahooks'
import { FieldFeedback } from '~/components/fieldFeedback'
import { formHelpers } from '~/utils'
// import { twMerge } from 'tailwind-merge'

import type { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
  label: string
  description?: string
  errorMessage?: string
  placeholder?: string | number
}
/**
 * Remove checkbox, redio, and others we won't be using
 * else we need to build in "checked" and stuff
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function (props, forwardedRef) {
  const { className, type = 'text', ...rest } = props

  // QUESTION kev what is this doing? the linter is complaining about it so I switched the `let` to `const`
  // let { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField(rest)
  // let { visuallyHiddenProps } = useVisuallyHidden()
  const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField(rest)
  const { visuallyHiddenProps } = useVisuallyHidden()

  const [value, setValue] = useControllableValue<string | number | undefined>(rest)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = (event.target as HTMLInputElement).value
    setValue(enteredName)
  }

  return (
    <div
      className={formHelpers.formStyles({
        tag: 'input',
        hasError: typeof props.errorMessage !== 'undefined',
        classes: className,
      })}
    >
      <label {...labelProps} {...visuallyHiddenProps}>
        {props.label}
      </label>
      <input ref={forwardedRef} type={type} value={value || ''} onChange={handleChange} {...fieldProps} {...rest} />
      <FieldFeedback
        description={props.description}
        descriptionProps={descriptionProps}
        errorMessage={props.errorMessage}
        errorMessageProps={errorMessageProps}
      />
    </div>
  )
})
Input.displayName = 'Input'
