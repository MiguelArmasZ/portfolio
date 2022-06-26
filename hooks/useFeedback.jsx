/* eslint-disable space-before-function-paren */
import { useMainContext } from './'

export const useFeedback = () => {
  const { setFeedback } = useMainContext()

  function handleFeedback(error, msg) {
    setFeedback({
      state: true,
      error,
      msg
    })

    setTimeout(() => {
      setFeedback({
        state: false,
        error
      })
    }, 5000)
  }

  return handleFeedback
}
