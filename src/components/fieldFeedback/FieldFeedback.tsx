import { forwardRef } from 'react'
import type { DOMAttributes } from 'react'
import type { FocusableElement } from '@react-types/shared'

type FieldFeedbackProps = {
  description?: string
  errorMessage?: string
  descriptionProps: DOMAttributes<FocusableElement>
  errorMessageProps: DOMAttributes<FocusableElement>
}

export const FieldFeedback = forwardRef<HTMLDivElement, FieldFeedbackProps>(function (props, forwardedRef) {
  const { description, errorMessage, descriptionProps, errorMessageProps } = props

  return (
    <div ref={forwardedRef}>
      {description && (
        <div className="text-sm" {...descriptionProps}>
          {description}
        </div>
      )}
      {errorMessage && (
        <div className="text-sm text-red-500" {...errorMessageProps}>
          {errorMessage}
        </div>
      )}
    </div>
  )
})
FieldFeedback.displayName = 'FieldFeedback'
