export const goToFeed = navigate => {
  navigate('/feed')
}

export const goToLogin = navigate => {
  navigate('/login')
}

export const goToSignUp = navigate => {
  navigate('/signup')
}

export const goToAdressForm = navigate => {
  navigate('/adressForm')
}

export const goToCart = navigate => {
  navigate('/cart')
}

export const goToEditAdress = navigate => {
  navigate('/editAdress')
}

export const goToEditProfile = navigate => {
  navigate('/editProfile')
}

export const goToProfile = navigate => {
  navigate('/profile')
}

export const goToRestaurant = (navigate, id) => {
  navigate(`/restaurant/${id}`)
}

export const goToSplash = navigate => {
  navigate('/')
}

export const goBack = navigate => {
  navigate(-1)
}
