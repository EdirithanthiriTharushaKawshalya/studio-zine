import type React from "react"
// Copied from shadcn/ui toast component
import type { Toast, ToastActionElement, ToastProps } from "@/components/ui/toast"
import { useToast as useToastImpl } from "@/components/ui/use-toast"

type ToastActionProps = React.ComponentPropsWithoutRef<typeof Toast>

export type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

export const useToast = () => {
  const { toast, dismiss, toasts } = useToastImpl()

  return {
    toast,
    dismiss,
    toasts,
  }
}

