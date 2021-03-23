// this constructs the URL from the filters (params) object
// note that in this case, those filters are chosen by the user.
export const filtersUrl = (params, basePath = '/news') => {
  if (Object.values(params).join('') === '')
    return basePath
  const q = Object.keys(params)
    .filter(key => params[key] !== '')
    .map(key => `${ key }=${ params[key] }`).join('&')
  return basePath + '?' + q
}
