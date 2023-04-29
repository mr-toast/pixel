// TODO improve error reporting and form submission/clear timing 

import { forwardRef, useState } from 'react'
import type { InputHTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '~/components/button'
import { ArrowPathIcon, PaperAirplaneIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { twMerge } from 'tailwind-merge'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

const inputClasses =
  'block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 dark:text-white dark:ring-white/10 dark:focus:ring-zinc-500 sm:text-sm sm:leading-6'

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('sending')
    try {
      const response = await fetch('/api/notifyMe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send email.')
      }

      // console.log('Email sent successfully')
      setSubmitStatus('sent')

      setTimeout(() => {
        setSubmitStatus('idle')
        reset()
      }, 3000)
    } catch (error) {
      // console.error('Error sending email')
      setSubmitStatus('failed')
    }
  }

  const buttonClasses = twMerge(
    'w-full sm:w-auto',
    submitStatus !== 'idle' && 'pointer-events-none',
    submitStatus == 'sending' && 'animate-pulse',
    submitStatus == 'sent' && 'bg-green-500',
    submitStatus == 'failed' && 'bg-red-500'
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Input
              label="Name"
              type="text"
              autoComplete="name"
              error={errors.name?.message}
              {...register('name', { required: 'Name is required', maxLength: 80 })}
            />
          </div>

          <div>
            <Input
              label="Email"
              type="text"
              autoComplete="email"
              error={errors.email?.message}
              {...register('email', { required: 'Email required', pattern: /^\S+@\S+$/i })}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              Looking for?
            </label>
            <div className="mt-2.5">
              <select {...register('subject')} className={inputClasses}>
                <option value="Frontend Development">Frontend Development</option>
                <option value="Shopify Ecommerce">Shopify Ecommerce</option>
                <option value="React Native Apps">React Native Apps</option>
                <option value="Other Help">Other Help</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                {...register('message', {
                  required: 'Message required',
                  maxLength: { value: 500, message: 'Max lenght 500 characters' },
                })}
                id="message"
                rows={6}
                defaultValue={''}
                className={inputClasses}
              />
              <p className="mt-2 text-red-500">{errors.message?.message}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Button type="submit" color="black" className={buttonClasses}>
            {buttonText(submitStatus)}
          </Button>
        </div>
      </div>
    </form>
  )
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...props }, ref) => {
  return (
    <>
      <label
        htmlFor={label.toLowerCase()}
        className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input id={label.toLowerCase()} ref={ref} className={inputClasses} {...props} />
        <p className="mt-2 text-red-500">{error}</p>
      </div>
    </>
  )
})
Input.displayName = 'Input'

function buttonText(submitStatus: string) {
  switch (submitStatus) {
    case 'sending':
      return (
        <>
          Sending... <ArrowPathIcon className="h-4 w-4 animate-spin" />
        </>
      )
    case 'sent':
      return (
        <>
          Sent <CheckIcon className="h-4 w-4" />
        </>
      )
    case 'failed':
      return (
        <>
          Failed <XMarkIcon className="h-4 w-4" />
        </>
      )
    default:
      return (
        <>
          Let&apos;s talk <PaperAirplaneIcon className="h-4 w-4" />
        </>
      )
  }
}
