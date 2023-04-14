import { forwardRef, InputHTMLAttributes } from 'react'
import { useField } from 'react-aria'
import { useControllableValue } from 'ahooks'
import { useVisuallyHidden } from 'react-aria'
import { FieldFeedback } from '~/components/fieldFeedback'
import { formHelpers } from '~/utils'
import { twMerge } from 'tailwind-merge'

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
  let { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField(rest)
  let { visuallyHiddenProps } = useVisuallyHidden()
  const [value, setValue] = useControllableValue(rest)

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
      <input ref={forwardedRef} type={type} value={value} onChange={handleChange} {...fieldProps} {...rest} />
      <FieldFeedback
        description={props.description}
        descriptionProps={descriptionProps}
        errorMessage={props.errorMessage}
        errorMessageProps={errorMessageProps}
      />
    </div>
  )
})
