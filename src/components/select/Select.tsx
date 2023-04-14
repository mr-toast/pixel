import React, { forwardRef } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { useControllableValue } from 'ahooks'
import { FieldFeedback } from '~/components/fieldFeedback'
import { useField, useVisuallyHidden } from 'react-aria'
import { formHelpers } from '~/utils'

export type SelectProps = React.FC<SelectPrimitive.SelectProps> & {
  className?: string
  label: string
  description?: string
  errorMessage?: string
  placeholder?: string
}

export const Select = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & SelectProps
>((props, forwardedRef) => {
  const { className, children, placeholder, ...rest } = props
  let { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField(rest)
  let { visuallyHiddenProps } = useVisuallyHidden()
  const [value, setValue] = useControllableValue(rest)

  return (
    <div
      className={formHelpers.formStyles({
        tag: 'button',
        hasError: typeof props.errorMessage !== 'undefined',
        classes: `${className} [&_button]:inline-flex [&_button]:items-center [&_button]:justify-between [&_button]:gap-2 [&_button]:rounded-full`,
      })}
    >
      <label {...labelProps} {...visuallyHiddenProps}>
        {props.label}
      </label>
      <SelectPrimitive.Root value={value} onValueChange={setValue}>
        <SelectPrimitive.Trigger ref={forwardedRef} {...fieldProps}>
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon>
            <ChevronDownIcon className="h-4 w-4 opacity-50" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className="animate-in fade-in-80 relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white text-slate-700 shadow-md">
            <SelectPrimitive.ScrollUpButton>
              <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton>
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      <FieldFeedback
        description={props.description}
        descriptionProps={descriptionProps}
        errorMessage={props.errorMessage}
        errorMessageProps={errorMessageProps}
      />
    </div>
  )
})

export const SelectOption = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>((props, forwardedRef) => {
  const { children, ...rest } = props

  return (
    <SelectPrimitive.Item
      {...rest}
      ref={forwardedRef}
      className="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
    >
      {children}
      <SelectPrimitive.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
})

export const SelectItemText = SelectPrimitive.ItemText
