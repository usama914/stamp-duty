export const useUtmTracking = () => {
  const getUtmParams = () => {
    if (process.client) {
      const params = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
      const utmParams: Record<string, string> = {}
      
      // First try to get from URL
      const route = useRoute()
      params.forEach(param => {
        if (route.query[param]) {
          utmParams[param] = route.query[param] as string
        } else {
          // Fallback to sessionStorage if not in URL
          const stored = sessionStorage.getItem(param)
          if (stored) utmParams[param] = stored
        }
      })
      
      return utmParams
    }
    return {}
  }

  const saveUtmParams = (route: any) => {
    if (process.client) {
      const params = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
      params.forEach(param => {
        const value = route.query[param]
        if (value) {
          sessionStorage.setItem(param, value.toString())
        }
      })
    }
  }

  // New helper function to add UTM params to navigation
  const withUtmParams = (path: string) => {
    const utmParams = getUtmParams()
    const hasParams = Object.keys(utmParams).length > 0
    
    if (!hasParams) return path
    
    const prefix = path.includes('?') ? '&' : '?'
    const params = new URLSearchParams(utmParams).toString()
    return `${path}${prefix}${params}`
  }

  return {
    getUtmParams,
    saveUtmParams,
    withUtmParams
  }
}
