import React, { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import { useField } from 'react-aria'
import { useControllableValue } from 'ahooks'
import { useVisuallyHidden } from 'react-aria'
import { FieldFeedback } from '../fieldFeedback/FieldFeedback'
import { formHelpers } from '../../utils/index'

export type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
  label: string
  description?: string
  errorMessage?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, forwardedRef) => {
  const { className, ...rest } = props
  // QUESTION kev what is this doing? the linter is complaining about it so I switched the `let` to `const`
  // let { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField(rest)
  // let { visuallyHiddenProps } = useVisuallyHidden()
  const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField(rest)
  const { visuallyHiddenProps } = useVisuallyHidden()
  const [value, setValue] = useControllableValue<string | undefined>(rest)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const enteredName = (event.target as HTMLTextAreaElement).value
    setValue(enteredName)
  }

  return (
    <div
      className={formHelpers.formStyles({
        tag: 'textarea',
        hasError: typeof props.errorMessage !== 'undefined',
        classes: `${className || ''} [&_textarea]:rounded-3xl`,
      })}
    >
      <label {...labelProps} {...visuallyHiddenProps}>
        {props.label}
      </label>
      <textarea ref={forwardedRef} value={value || ''} onChange={handleChange} {...fieldProps} {...rest} />
      <FieldFeedback
        description={props.description}
        descriptionProps={descriptionProps}
        errorMessage={props.errorMessage}
        errorMessageProps={errorMessageProps}
      />
    </div>
  )
})
TextArea.displayName = 'TextArea'
