import { motion, AnimatePresence } from 'framer-motion'
import { HiCheckCircle, HiInformationCircle, HiX } from 'react-icons/hi'
import { useToast } from '../context/ToastContext'

export default function Toast() {
  const { toasts, removeToast } = useToast()

  return (
    <div className="toast-container" aria-live="polite">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            className={`toast toast--${toast.type}`}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 450, damping: 28 }}
            layout
          >
            <span className="toast__icon">
              {toast.type === 'success' ? (
                <HiCheckCircle />
              ) : (
                <HiInformationCircle />
              )}
            </span>
            <span className="toast__message">{toast.message}</span>
            <button
              className="toast__close"
              onClick={() => removeToast(toast.id)}
              aria-label="Close notification"
            >
              <HiX />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
