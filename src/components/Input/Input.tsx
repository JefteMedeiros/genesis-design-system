import { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from "react"
import { MagnifyingGlass } from "phosphor-react"

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id?: string
  placeholder: string
  label?: string
  searchIcon?: boolean
}

export type InputRef = HTMLInputElement

const InputComponent: ForwardRefRenderFunction<InputRef, InputProps> = (
  { placeholder, id, label, searchIcon, ...props }: InputProps,
  ref,
) => {
  return (
    <div className="font-nunito flex flex-col w-full">
      {label && (
        <label
          className="font-bold text-[0.875rem] text-neutral-600 mb-2"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="flex items-center justify-between gap-2 border-2 h-12 px-4 rounded-md border-neutral-400 focus-within:border-brand-primary transition">
        <input
          ref={ref}
          {...props}
          placeholder={placeholder}
          className="outline-none w-full"
        />
        {searchIcon && (
          <MagnifyingGlass
            className="text-brand-primary"
            size={20}
            weight="bold"
          />
        )}
      </div>
    </div>
  )
}

export const Input = forwardRef(InputComponent)

Input.displayName = "Input"
