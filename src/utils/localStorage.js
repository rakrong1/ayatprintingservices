// localStorage utility functions
export const localStorageUtils = {
  // Save data to localStorage
  setItem: (key, value) => {
    try {
      const serializedValue = JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
      return true
    } catch (error) {
      console.error('Error saving to localStorage:', error)
      return false
    }
  },

  // Get data from localStorage
  getItem: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return defaultValue
    }
  },

  // Remove item from localStorage
  removeItem: (key) => {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.error('Error removing from localStorage:', error)
      return false
    }
  },

  // Clear all localStorage
  clear: () => {
    try {
      localStorage.clear()
      return true
    } catch (error) {
      console.error('Error clearing localStorage:', error)
      return false
    }
  },

  // Check if localStorage is available
  isAvailable: () => {
    try {
      const test = '__localStorage_test__'
      localStorage.setItem(test, test)
      localStorage.removeItem(test)
      return true
    } catch (error) {
      return false
    }
  }
}

// Specific functions for our app
export const clientDataUtils = {
  // Save contact form data
  saveContactForm: (formData) => {
    const timestamp = new Date().toISOString()
    const dataWithTimestamp = { ...formData, savedAt: timestamp }
    return localStorageUtils.setItem('ayat_contact_form', dataWithTimestamp)
  },

  // Get saved contact form data
  getSavedContactForm: () => {
    return localStorageUtils.getItem('ayat_contact_form', {})
  },

  // Save client preferences
  saveClientPreferences: (preferences) => {
    return localStorageUtils.setItem('ayat_client_preferences', preferences)
  },

  // Get client preferences
  getClientPreferences: () => {
    return localStorageUtils.getItem('ayat_client_preferences', {
      theme: 'light',
      notifications: true,
      autoSave: true,
      language: 'en'
    })
  },

  // Save client's service history
  saveServiceHistory: (service) => {
    const history = localStorageUtils.getItem('ayat_service_history', [])
    const newEntry = {
      ...service,
      timestamp: new Date().toISOString(),
      id: Date.now()
    }
    history.unshift(newEntry) // Add to beginning
    
    // Keep only last 10 entries
    const limitedHistory = history.slice(0, 10)
    return localStorageUtils.setItem('ayat_service_history', limitedHistory)
  },

  // Get service history
  getServiceHistory: () => {
    return localStorageUtils.getItem('ayat_service_history', [])
  },

  // Save frequently used services
  saveFrequentServices: (services) => {
    return localStorageUtils.setItem('ayat_frequent_services', services)
  },

  // Get frequent services
  getFrequentServices: () => {
    return localStorageUtils.getItem('ayat_frequent_services', [])
  },

  // Clear all client data
  clearAllClientData: () => {
    const keys = [
      'ayat_contact_form',
      'ayat_client_preferences', 
      'ayat_service_history',
      'ayat_frequent_services'
    ]
    
    keys.forEach(key => localStorageUtils.removeItem(key))
    return true
  }
}